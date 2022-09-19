import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import { useTranslation } from "next-i18next";

import cls from "./contact.module.scss";

const Contact = () => {
  const { t } = useTranslation('common')

  return (
    <div className={cls.contact}>

      <Container maxWidth="xl">
        <div className={cls.contact__form}>
          <div className={cls.contact__form_fields}>
            <div className={cls.fields__head}>
              <h2>{t('contact.touch')}</h2>
              <p>
                {t('contact.contactText')}
              </p>
            </div>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <input type="text" placeholder={t('contact.name')} />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <input type="text" placeholder={t('contact.email')} />
              </Grid>

              <Grid item xs={12} md={12}>
                <input type="text" placeholder={t('contact.phone')} />
              </Grid>

              <Grid item xs={12} md={12}>
                <textarea placeholder={t('contact.mind')}></textarea>
              </Grid>

              <button>{t('contact.ask')}</button>
            </Grid>
          </div>

          <div className={cls.contact__form_features}>
            <div className={cls.features__head}>
              <h2>{t('contact.store')}</h2>
              <p>{t('contact.storeText')}</p>
            </div>

            <h4>{t('contact.talk')}</h4>
            <div className={cls.feature}>
              <i className="fa-light fa-phone-volume"></i>

              <div>
                <p>{t('contact.phone')}: +201025864313</p>
                <p>{t('contact.email')}: civil.ahmad.eid@gmail.com</p>
              </div>
            </div>

            <h4>{t('contact.findUs')}</h4>
            <div className={cls.feature}>
              <i className="fa-light fa-location-dot"></i>

              <div>
                <p>{t('contact.address')}: Cairo, nasr city</p>
                <p>{t('contact.country')}: Egypt</p>
              </div>
            </div>

            <h4>{t('contact.operation')}</h4>
            <div className={cls.feature}>
              <i className="fa-light fa-clock-desk"></i>

              <div>
                <p>Days: 7 days a week</p>
                <p>Hours: 24 hours a day</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={cls.contact__map}>
        <div>
          <div className="gmap_canvas">
            <iframe
              className={cls.contact__map_it}
              src="https://maps.google.com/maps?q=cairo%20nasr%20city&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
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

export default Contact;
