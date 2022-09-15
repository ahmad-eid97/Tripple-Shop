/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import Container from "@mui/material/Container";

import cls from "./register.module.scss";

const Login = () => {
  const router = useRouter()

  return (
    <Container maxWidth="xxl">
      <section className={cls.register}>

        <div className={cls.register__formArea}>

          <h3>Create new account to join us</h3>

          <div className={cls.field}>
            <input type="text" placeholder="Full Name" />
          </div>

          <div className={cls.field}>
            <input type="text" placeholder="Email" />
          </div>

          <div className={cls.field}>
            <input type="password" placeholder="Password" />
          </div>

          <div className={cls.field}>
            <input type="password" placeholder="Confirm Password" />
          </div>

          <div className={cls.remember}>

            <div>

              <input type="checkbox" />

              <span>Remember Me</span>

            </div>

            <p>Forgot Password?</p>

          </div>

          <button>Create Account</button>

          <p className={cls.or}>Or Signup With</p>

          <div className={cls.externalAuth}>

            <div className={`${cls.externalAuth__external} ${cls.google}`}>

              <img src="/imgs/auth/G_logo.svg" alt="externalAuthImage" />

              <p>Google</p>

            </div>

            <div className={`${cls.externalAuth__external} ${cls.facebook}`}>

              <img src="/imgs/auth/F_logo.svg" alt="externalAuthImage" />

              <p>Facebook</p>

            </div>

          </div>

          <div className={cls.login}>

            <p>already have account?</p>

            <span onClick={() => router.push('/login')}>Login Now</span>

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
