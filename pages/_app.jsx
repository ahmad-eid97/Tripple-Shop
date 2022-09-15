/* eslint-disable @next/next/no-page-custom-font */
// NEXT STUFF
import App from 'next/app';
import Head from 'next/head';
// STORE STUFF
import { wrapper } from '../store/store';
// COMPONENTS
import MainLayout from '../layouts/mainLayout';
import ThemeContextProvider from '../theme/theme';
// COOKIES
import Cookies from 'universal-cookie';
const cookie = new Cookies()
// TRANSLATION STUFF
import { appWithTranslation } from "next-i18next";
// TOASTIFY STUFF
import { ToastContainer } from "react-toastify";
// STYLES FILES
import "react-toastify/dist/ReactToastify.css";
import '../public/css/all.min.css';
import '../styles/variables.scss';
import '../styles/globals.scss';

class MyApp extends App {

  static getInitialProps = wrapper.getInitialAppProps(store => async context => {

      return {
        ...(await App.getInitialProps(context)).pageProps,
        locale: context.ctx.locale
      };

  });

  componentDidMount() {
    if (!cookie.get('gridsStoreMode')) {
      cookie.set('gridsStoreMode', 'light', {path: "/"})
    }
    if (!cookie.get('gridsStoreLang')) {
      cookie.set('gridsStoreLang', 'en', {path: "/"})
    }
  }

  render() {
      const {Component, pageProps, locale} = this.props;

      return (
            <div id={locale}>

              <Head>
                <title>Tripple Shop</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"></link>
                <link rel="shortcut icon" href="./favicon.png" />
              </Head>

              {/* TOASTFY COMPONENT */}
              <ToastContainer
                position={locale === "ar" ? "top-left" : "top-right"}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={locale === "ar" ? true : false}
                pauseOnHover
              />

              <MainLayout>
                <ThemeContextProvider>
                    <Component {...pageProps} />
                </ThemeContextProvider>
              </MainLayout>
            </div>
      );
  }
}

export default wrapper.withRedux(appWithTranslation(MyApp));