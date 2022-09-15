import { PagesNavHeader, CartItem } from './../../components';

import Container from '@mui/material/Container';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import { useTranslation } from 'next-i18next';

import cls from './cart.module.scss';

const Cart = () => {
  const { i18n } = useTranslation('common')

  return (
    <div className={cls.cart}>

      <Container maxWidth="xxl">

        <PagesNavHeader steps={["Cart"]} />

        <div className={cls.cart__header}>

          <span className={cls.product}>Product</span>

          <span className={cls.price}>Price</span>

          <span className={cls.quantity}>Quantity</span>

          <span className={cls.total}>Total</span>

          <span className={cls.remove}>Remove</span>

        </div>

        <CartItem />
        <CartItem />
        <CartItem />

        <div className={cls.cart__actions}>

          <div className={cls.coupon}>

            <input type="text" placeholder='Coupon code' />

            <button className={cls[i18n.language]}>Apply coupon</button>

          </div>

          <div className={cls.checkout}>

            <button>Clear cart</button>

            <button className={cls.proceed}>Proceed to checkout</button>

          </div>

        </div>

        <div className={cls.cart__wrapper}>
          <div className={cls.cartTotals}>

            <h3 className={cls[i18n.language]}>Cart Totals <span></span></h3>

            <div className={cls.part}>
              <p>Subtotal:</p>
              <span>$2000</span>
            </div>

            <div className={cls.part}>
              <p>Shippment:</p>
              <span>$10</span>
            </div>

            <div className={cls.part}>
              <p>Subtotal:</p>
              <span>$2010</span>
            </div>

            <div className={cls.part}>
              <p>Total:</p>
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