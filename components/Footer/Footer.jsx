/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import cls from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.footer__top}>
        <Container maxWidth="xl">
          <div className={cls.footer__top_wrapper}>
            <h5>
              <i className="fa-light fa-paper-plane-top"></i> Sign up to
              Newsletter ...and receive $20 coupon for first shopping
            </h5>

            <div className={cls.navbar__search__searchArea}>
              <input type="text" placeholder="Search" />

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
                <h1>Tripple Shop</h1>

                <div className={cls.support}>
                  <i className="fa-thin fa-hands-holding-heart"></i>

                  <div>
                    <h6>Support: 01025864313</h6>
                    <span>Email: info@tripple.com</span>
                  </div>
                </div>

                <div>
                  <h6>Contact Info</h6>
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
              <h4>Find It Fast</h4>
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
                  <Link href="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/policy">Policy</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <h4>Customer Care</h4>
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
          <span>© Tripple shop - All Rights Reserved</span>

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
