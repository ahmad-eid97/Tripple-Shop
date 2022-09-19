/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import cls from "./register.module.scss";

const Login = () => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common');

  return (
    <Container maxWidth="xxl">
      <section className={cls.register}>

        <div className={cls.register__formArea}>

          <h3>{t('register.create')}</h3>

          <div className={cls.field}>
            <input type="text" placeholder={t('register.name')} />
          </div>

          <div className={cls.field}>
            <input type="text" placeholder={t('register.email')} />
          </div>

          <div className={cls.field}>
            <input type="password" placeholder={t('register.password')} />
          </div>

          <div className={cls.field}>
            <input type="password" placeholder={t('register.confirm')} />
          </div>

          <div className={cls.remember}>

            <div>

              <input type="checkbox" />

              <span>{t('register.remember')}</span>

            </div>

          </div>

          <button>{t('register.createAccount')}</button>

          <p className={cls.or}>{t('register.orSignup')}</p>

          <div className={cls.externalAuth}>

            <div className={`${cls.externalAuth__external} ${cls.google}`}>

              <img src="/imgs/auth/G_logo.svg" alt="externalAuthImage" className={cls[i18n.language]} />

              <p>{t('register.google')}</p>

            </div>

            <div className={`${cls.externalAuth__external} ${cls.facebook}`}>

              <img src="/imgs/auth/F_logo.svg" alt="externalAuthImage" className={cls[i18n.language]} />

              <p>{t('register.facebook')}</p>

            </div>

          </div>

          <div className={cls.login}>

            <p>{t('register.haveAccount')}</p>

            <span onClick={() => router.push('/login')}>{t('register.login')}</span>

          </div>

        </div>

      </section>
    </Container>
  );
};

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

export default Login;
