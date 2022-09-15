/* eslint-disable @next/next/no-img-element */
import PagesNavHeader from './../../components/PagesNavHeader/PagesNavHeader';

import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import { useTranslation } from 'next-i18next';

import cls from './compare.module.scss';

const Compare = () => {
  return (
    <div className={cls.compare}>

      <Container maxWidth="xxl" className={cls.products_scroll}>

        <PagesNavHeader steps={['Compare']} />

        <div className={cls.products_wrapper}>

          <div className={`${cls.product} ${cls.specs}`}>

            <div className={cls.product__head}>

              <h4>Product</h4>

            </div>

            <div className={cls.price}>

              <h4>Price</h4>

            </div>

            <div className={cls.availability}>

              <h4>Availability</h4>

            </div>

            <div className={cls.description}>

              <h4>Description</h4>

            </div>

            <div className={cls.add}>

              <h4>Add to cart</h4>

            </div>

            <div className={cls.remove}>

              <h4>Remove</h4>

            </div>

          </div>

          <div className={cls.product}>

            <div className={cls.product__head}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <h5>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h5>

              <Rating name="read-only" value={4} readOnly />

            </div>

            <div className={cls.price}>

              <h3>$3000</h3>

            </div>

            <div className={cls.availability}>

              <h5>30 in stock</h5>

            </div>

            <div className={cls.description}>

              <ul>
                <li>Fingertip controls: On-speaker volume and bass.</li>
                <li>Handy headphone jack: Listen to music, movies and games in total privacy</li>
              </ul>

            </div>

            <div className={cls.add}>

              <button>Add to cart</button>

            </div>

            <div className={cls.remove}>

              <h4><i className="fa-duotone fa-trash-can-list"></i></h4>

            </div>

          </div>

          <div className={cls.product}>

            <div className={cls.product__head}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <h5>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h5>

              <Rating name="read-only" value={4} readOnly />

            </div>

            <div className={cls.price}>

              <h3>$3000</h3>

            </div>

            <div className={cls.availability}>

              <h5>30 in stock</h5>

            </div>

            <div className={cls.description}>

              <ul>
                <li>Fingertip controls: On-speaker volume and bass.</li>
                <li>Handy headphone jack: Listen to music, movies and games in total privacy</li>
              </ul>

            </div>

            <div className={cls.add}>

              <button>Add to cart</button>

            </div>

            <div className={cls.remove}>

              <h4><i className="fa-duotone fa-trash-can-list"></i></h4>

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

export default Compare