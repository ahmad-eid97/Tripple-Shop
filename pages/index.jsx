import { Deals, HomeCategory, FlatHomeCategory, Categories, TopProducts } from '../components';
import { Header } from './../components';

import langRedirection from '../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../store/store';

import cls from './home.module.scss';

const Home = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.home}>

      <Header />

      <Deals />

      <HomeCategory />

      <HomeCategory rounded={true} />

      <HomeCategory />

      <FlatHomeCategory />

      <HomeCategory />

      <Categories />

      <TopProducts />

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
          locale
        },
      };
    }
);

export default Home;