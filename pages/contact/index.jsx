import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import { useTranslation } from "next-i18next";

import cls from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={cls.contact}>

      <Container maxWidth="xl">
        <div className={cls.contact__form}>
          <div className={cls.contact__form_fields}>
            <div className={cls.fields__head}>
              <h2>Get In Touch</h2>
              <p>
                Your email address will not be published. Required fields are
                marked
              </p>
            </div>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <input type="text" placeholder="Full name" />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <input type="text" placeholder="Email address" />
              </Grid>

              <Grid item xs={12} md={12}>
                <input type="text" placeholder="Phone number" />
              </Grid>

              <Grid item xs={12} md={12}>
                <textarea placeholder="What's on your mind?"></textarea>
              </Grid>

              <button>Ask A Question</button>
            </Grid>
          </div>

          <div className={cls.contact__form_features}>
            <div className={cls.features__head}>
              <h2>Our Store</h2>
              <p>Easy to find us, much easier to reach you anywhere</p>
            </div>

            <h4>Lets Talk</h4>
            <div className={cls.feature}>
              <i className="fa-light fa-phone-volume"></i>

              <div>
                <p>Phone: +201025864313</p>
                <p>Email: civil.ahmad.eid@gmail.com</p>
              </div>
            </div>

            <h4>Find Us</h4>
            <div className={cls.feature}>
              <i className="fa-light fa-location-dot"></i>

              <div>
                <p>Address: Cairo, nasr city</p>
                <p>Country: Egypt</p>
              </div>
            </div>

            <h4>Hours of Operation</h4>
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
