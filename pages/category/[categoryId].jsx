import { useState } from 'react';

import { CategoryFilter, TopProducts, TopFilterNav, CategoryProducts, PagesNavHeader } from '../../components';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import cls from './category.module.scss';

const headerNav = [
  'Category',
  'Electronics'
]

const Category = () => {
  const [viewType, setViewType] = useState('grid')

  return (
    <div className={cls.category}>

      <Container maxWidth="xxl">

        <PagesNavHeader steps={headerNav} />

        <Grid container spacing={5}>

          <Grid item xs={12} md={4} xl={3}>
            
            <div className={cls.categoryfilter}>

              <CategoryFilter />

            </div>

          </Grid>

          <Grid item xs={12} md={8} xl={9}>

            <TopFilterNav viewType={viewType} setViewType={setViewType} />

            <CategoryProducts viewType={viewType} />

          </Grid>

        </Grid>

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

export default Category;