import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import { useTranslation } from "next-i18next";

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Container from "@mui/material/Container";
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import cls from './faq.module.scss'
import Link from 'next/link';

const Index = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.faq}>
      <Container maxWidth="xxl">
        <h1 className={cls.faq_title}>
          {t('faq.faq')}
        </h1>

        <Accordion sx={{ boxShadow: 0 }}>
          <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} className={cls.question}>
            <p><i className="fa-light fa-circle-question"></i> Do I Need an Account to Place an Order?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 0 }}>
          <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} className={cls.question}>
            <p><i className="fa-light fa-circle-question"></i> How Should I Contact if I Have Any Queries?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 0 }}>
          <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} className={cls.question}>
            <p><i className="fa-light fa-circle-question"></i> How Do I Place an Order?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 0 }}>
          <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} className={cls.question}>
            <p><i className="fa-light fa-circle-question"></i> How Long Will it Take To Get My Package?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 0 }}>
          <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} className={cls.question}>
            <p><i className="fa-light fa-circle-question"></i> What Shipping Methods Are Available?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 0 }}>
          <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} className={cls.question}>
            <p><i className="fa-light fa-circle-question"></i> How Do I track My Order?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
            In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.
            </p>
          </AccordionDetails>
        </Accordion>

        <h2>
          <i className="fa-light fa-headset"></i> CONTACT US
        </h2>

        <p>
        If you have any other questions about us, please contact us filling this Contact Form. {" "}
          <Link href="/contact-us">
            <a>Contact Form</a>
          </Link>.
        </p>

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

export default Index