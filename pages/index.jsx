import { 
  Header, 
  HeaderTwo, 
  HeaderThree, 
  HeaderFour,
  HeaderFive,
  HeaderSix,
  TopRatedSlider,
  Deals, 
  DealsTwo, 
  HomeCategory, 
  HomeCategoryTwo,
  HomeCategoryThree,
  FlatHomeCategory, 
  Categories, 
  CategoriesTwo,
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

      <HeaderThree />

      {/* <HeaderFour top={false} /> */}

      {/* <HeaderFive /> */}

      {/* <HeaderSix /> */}

      <TopRatedSlider />

      <Deals />

      <DealsTwo />

      <HomeCategory />

      <HomeCategory rounded={true} />

      <HomeCategoryThree />

      <FlatHomeCategory />

      <HomeCategoryTwo />

      <Categories />

      <CategoriesTwo />

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
          ...(await serverSideTranslations(locale, ["common", "nav"]))
        },
      };
    }
);

export default Home;