import { PagesNavHeader, CartItem } from './../../components';

import Container from '@mui/material/Container';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import { useTranslation } from 'next-i18next';

import cls from './cart.module.scss';

const Cart = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <div className={cls.cart}>

      <Container maxWidth="xxl">

        <PagesNavHeader steps={[`${t('cart.cart')}`]} />

        <div className={cls.cart__header}>

          <span className={cls.product}>{t('cart.product')}</span>

          <span className={cls.price}>{t('cart.price')}</span>

          <span className={cls.quantity}>{t('cart.quantity')}</span>

          <span className={cls.total}>{t('cart.total')}</span>

          <span className={cls.remove}>{t('cart.remove')}</span>

        </div>

        <CartItem />
        <CartItem />
        <CartItem />

        <div className={cls.cart__actions}>

          <div className={cls.coupon}>

            <input type="text" placeholder={t('cart.couponCode')} />

            <button className={cls[i18n.language]}>{t('cart.coupon')}</button>

          </div>

          <div className={cls.checkout}>

            <button>{t('cart.clear')}</button>

            <button className={cls.proceed}>{t('cart.checkout')}</button>

          </div>

        </div>

        <div className={cls.cart__wrapper}>
          <div className={cls.cartTotals}>

            <h3 className={cls[i18n.language]}>{t('cart.totals')} <span></span></h3>

            <div className={cls.part}>
              <p>{t('cart.subTotal')}:</p>
              <span>$2000</span>
            </div>

            <div className={cls.part}>
              <p>{t('cart.shippment')}:</p>
              <span>$10</span>
            </div>

            <div className={cls.part}>
              <p>{t('cart.subTotal')}:</p>
              <span>$2010</span>
            </div>

            <div className={cls.part}>
              <p>{t('cart.total')}:</p>
              <span>$2010</span>
            </div>

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

export default Cart