import { 
  Header, 
  HeaderTwo, 
  HeaderThree, 
  HeaderFour,
  HeaderFive,
  Deals, 
  DealsTwo, 
  HomeCategory, 
  HomeCategoryTwo,
  HomeCategoryThree,
  FlatHomeCategory, 
  Categories, 
  TopProducts 
} from '../components';

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

      {/* <Header /> */}

      {/* <HeaderTwo /> */}

      {/* <HeaderThree /> */}

      <HeaderFour top={false} />

      {/* <HeaderFive /> */}

      <Deals />

      <DealsTwo />

      <HomeCategory />

      <HomeCategory rounded={true} />

      <HomeCategoryThree />

      <FlatHomeCategory />

      <HomeCategoryTwo />

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