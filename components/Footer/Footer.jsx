/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import cls from "./footer.module.scss";

const Footer = () => {
  const { t, i18n } = useTranslation('nav');
  const router = useRouter();

  return (
    <div className={cls.footer}>
      <div className={cls.footer__top}>
        <Container maxWidth="xl">
          <div className={cls.footer__top_wrapper}>
            <h5>
              <i className="fa-light fa-paper-plane-top"></i> {t('footer.signin')}
            </h5>

            <div className={`${cls.navbar__search__searchArea} ${cls.rounded} ${cls[i18n.language]}`}>
              <input type="text" placeholder={t('footer.search')} />

              <button>
                <i className="fa-light fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="xl">
        <div className={cls.footer__columns}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.logoArea}>
                <h1 onClick={() => router.push('/')}>{t('footer.logo')}</h1>

                <div className={cls.support}>
                  <i className="fa-thin fa-hands-holding-heart"></i>

                  <div>
                    <h6>{t('footer.support')}: 01025864313</h6>
                    <span>{t('footer.email')}: info@tripple.com</span>
                  </div>
                </div>

                <div>
                  <h6>{t('footer.contact')}</h6>
                  <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>

                <div className={cls.footer__columns_links}>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-whatsapp"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <h4>{t('footer.find')}</h4>
              <ul>
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>TV & Audio</li>
                <li>Gadgets</li>
                <li>Waterproof Headphones</li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <h5></h5>
              <ul>
                <li>
                  <Link href="/wishlist">{t('nav.wishlist')}</Link>
                </li>
                <li>
                  <Link href="/about">{t('nav.about')}</Link>
                </li>
                <li>
                  <Link href="/contact">{t('nav.contact')}</Link>
                </li>
                <li>
                  <Link href="/policy">{t('nav.policy')}</Link>
                </li>
                <li>
                  <Link href="/faq">{t('nav.faq')}</Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <h4>{t('footer.care')}</h4>
              <ul>
                <li>My Account</li>
                <li>Track your Order</li>
                <li>Customer Service</li>
                <li>Returns/Exchange</li>
                <li>FAQs</li>
                <li>Product Support</li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Container>

      <div className={cls.footer__bottom}>
        <Container maxWidth="xl" className={cls.footer__bottom_wrapper}>
          <span>{t('footer.rights')}</span>

          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/patment-icon1.png"
            alt="image"
          />
        </Container>
      </div>
    </div>
  );
};

export default Footer;
