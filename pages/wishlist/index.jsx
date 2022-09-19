import { PagesNavHeader, WishlistItem } from './../../components';

import Container from '@mui/material/Container';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import { useTranslation } from 'next-i18next';

import cls from './wishlist.module.scss';

const Wishlist = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.wishlist}>

      <Container maxWidth="xxl">

        <PagesNavHeader steps={[`${t('wishlist.wishlist')}`]} />

        <div className={cls.wishlist__header}>

          <span className={cls.product}>{t('wishlist.product')}</span>

          <span className={cls.price}>{t('wishlist.price')}</span>

          <span className={cls.quantity}>{t('wishlist.quantity')}</span>

          <span className={cls.add}>{t('wishlist.addCart')}</span>

        </div>

        <WishlistItem />
        <WishlistItem />
        <WishlistItem />

        <div className={cls.wishlist__actions}>

          <div className={cls.checkout}>

            <button>{t('wishlist.clear')}</button>

          </div>

        </div>

      </Container>

    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale, resolvedUrl }) => {
      const languageRedirection = langRedirection(req, locale);
      const routerRedirection = routeRedirection(req, resolvedUrl);

      if (languageRedirection) return languageRedirection;
      if (routerRedirection) return routerRedirection;
 
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
        },
      };
    }
);

export default Wishlist;