import { PagesNavHeader, ProductImages, ProductDetails, ProductSpecs, RelatedProducts, TopProducts } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './product.module.scss';

const headerNav = [
  'Laptops & Computers',
  'Laptops',
  'Dell G15'
]

const Product = () => {
  return (
    <div className={cls.product}>

      <Container maxWidth="xxl">

        <PagesNavHeader steps={headerNav} />

        <Grid container spacing={5} className={cls.product__wrapper}>

          <Grid item xs={12} md={6}>

            <ProductImages />

          </Grid>

          <Grid item xs={12} md={6}>

            <ProductDetails />

          </Grid>

        </Grid>

        <ProductSpecs />

        <RelatedProducts />

        <TopProducts />

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

export default Product