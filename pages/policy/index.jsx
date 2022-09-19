import Container from "@mui/material/Container";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import { useTranslation } from "next-i18next";

import cls from "./policy.module.scss";

const Policy = () => {
  const { t } = useTranslation('common');

  return (
    <div className={cls.privacy}>
      <Container maxWidth="xxl">
        <h1 className={cls.privacy_title}>{t('policy.policy')}</h1>

        <h2>
          <i className="fa-light fa-lightbulb-exclamation"></i> INTELLECTUAL
          PROPERTY
        </h2>

        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at
            lorem. Donec ultricies, lorem sed ultrices interdum.
          </li>
          <li>
            Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec
            tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum
            leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate
            enim.
          </li>
          <li>
            Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
            fermentum.
          </li>
          <li>
            Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae
            ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa
            at faucibus.
          </li>
          <li>
            Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim
            tortor, sit amet condimentum mi ligula sit amet augue.
          </li>
          <li>Pellentesque vitae eros eget enim mollis placerat.</li>
        </ol>

        <h2>
          <i className="fa-light fa-delete-right"></i> TERMINATION
        </h2>

        <ol>
          <li>
            There are many variations of passages of Lorem Ipsum available
          </li>
          <li>If you are going to use a passage</li>
          <li>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary
          </li>
          <li>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures
          </li>
          <li>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </li>
          <li>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text
          </li>
        </ol>

        <h2>
          <i className="fa-light fa-money-check-pen"></i> CHANGES TO THIS
          AGREEMENT
        </h2>

        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms and Conditions by posting the updated terms on the Site.
          Your continued use of the Site after any such changes constitutes your
          acceptance of the new Terms and Conditions.
        </p>
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

export default Policy;
