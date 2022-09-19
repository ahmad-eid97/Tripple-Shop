import Container from "@mui/material/Container";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import { useTranslation } from "next-i18next";

import cls from "./about.module.scss";

const About = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <Container maxWidth="xxl">
        <h1 className={cls.about_title}>{t('about.about')}</h1>
      </Container>

      <Container maxWidth="xxl" className={cls.about}>
        <div>
          <h4>What we really do?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            minus perferendis libero eveniet quod inventore officiis tenetur.
            Amet ullam ipsum, dolore dolores nesciunt, sapiente corrupti, dolor
            iure minima deleniti magnam?
          </p>
        </div>

        <div>
          <h4>Our vision</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            minus perferendis libero eveniet quod inventore officiis tenetur.
            Amet ullam ipsum, dolore dolores nesciunt, sapiente corrupti, dolor
            iure minima deleniti magnam?
          </p>
        </div>

        <div className={cls.withIcons}>
          <ul>
            <li>
              <i className="fa-regular fa-headphones-simple"></i> Support 24/7
            </li>
            <li>
              <i className="fa-light fa-badge-sheriff"></i> Best Quanlity
            </li>
            <li>
              <i className="fa-light fa-truck"></i> Fastest Delivery
            </li>
            <li>
              <i className="fa-light fa-user-clock"></i> Customer Care
            </li>
          </ul>
        </div>

        <div className={cls.secondLine}>
          <h4>History of the Company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            minus perferendis libero eveniet quod inventore officiis tenetur.
            Amet ullam ipsum, dolore dolores nesciunt, sapiente corrupti, dolor
            iure minima deleniti magnam?
          </p>
        </div>

        <div className={cls.secondLine}>
          <h4>Cooperate with Us!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            minus perferendis libero eveniet quod inventore officiis tenetur.
            Amet ullam ipsum, dolore dolores nesciunt, sapiente corrupti, dolor
            iure minima deleniti magnam?
          </p>
        </div>

      </Container>
    </div>
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

export default About;
