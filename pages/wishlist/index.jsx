import { PagesNavHeader, WishlistItem } from './../../components';

import Container from '@mui/material/Container';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import { useTranslation } from 'next-i18next';

import cls from './wishlist.module.scss';

const Wishlist = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.wishlist}>

      <Container maxWidth="xxl">

        <PagesNavHeader steps={["Wishlist"]} />

        <div className={cls.wishlist__header}>

          <span className={cls.product}>Product</span>

          <span className={cls.price}>Price</span>

          <span className={cls.quantity}>Quantity</span>

          <span className={cls.add}>Add to cart</span>

        </div>

        <WishlistItem />
        <WishlistItem />
        <WishlistItem />

        <div className={cls.wishlist__actions}>

          <div className={cls.checkout}>

            <button>Clear wishlist</button>

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