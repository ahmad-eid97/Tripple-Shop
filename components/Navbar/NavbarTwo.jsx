/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import TopNav from "./TopNav/TopNav";
import LangSwitch from "../switches/LangSwitch/LangSwitch";
import CurrencySwitch from './../switches/CurrencySwitch/CurrencySwitch';
import ModeSwitch from "../switches/ModeSwitch/ModeSwitch";
import MobSidebar from "./MobSidebar/MobSidebar";
import AnimatedIcons from "./../UIs/AnimatedIcons/AnimatedIcons";

import * as animationData from "../../public/animated/support.json";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from "./navbarTwo.module.scss";

const Navbar = ({ rounded }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navDropdown, setNavDropdown] = useState(0);
  const router = useRouter();
  const { t, i18n } = useTranslation("nav");

  return (
    <div className={cls.navbar}>
      <TopNav />
      <Container maxWidth="xxl" className={`${cls.search__wrapper}`}>
        <div className={cls.logo}>
          <Link href="/">
            <img
              className={cls.bigImage}
              src="./imgs/logos/coloredSmallLogo.png"
              alt="tripple-shop-logo"
            />
          </Link>
        </div>

        <div
          className={`${cls.navbar__search__searchArea} ${cls.rounded} ${
            rounded ? cls.rounded : ""
          } ${cls[i18n.language]}`}
        >
          <input type="text" placeholder={t("nav.search")} />

          <button>
            <i className="fa-light fa-magnifying-glass"></i>
          </button>
        </div>

        <div className={cls.support}>
          <AnimatedIcons animationData={animationData} />

          <div>
            <h6>{t("nav.support")}: 01025864313</h6>
            <span>{t("nav.email")}: info@tripple.com</span>
          </div>
        </div>
      </Container>

      <div className={cls.navbar__main}>
        <Container maxWidth="xxl" className={`${cls.navbar_mainNav}`}>
          <div className={cls.smallLogo}>
            <i
              className="fa-light fa-grid-2"
              onClick={() => setOpenSidebar(!openSidebar)}
            ></i>{" "}
            <Link href="/">
              <img
                className={cls.smallImage}
                src="./imgs/logos/whiteSmallLogo.png"
                alt="tripple-shop-logo"
              />
            </Link>
          </div>

          <div className={cls.switches}>
            <LangSwitch />

            <CurrencySwitch />

            <ModeSwitch />
          </div>

          <div className={cls.links}>
            <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
              <li
                onMouseEnter={() => setNavDropdown(1)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Movies & Games <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 1 && (
                  <div className={cls.pagesDropdown}>
                    <Grid container>
                      <Grid item md={3}>
                        <h5>Laptops</h5>

                        <ul>
                          <li>Thin and Light Laptops</li>
                          <li>Gaming Laptops</li>
                          <li>Budget Laptops</li>
                          <li>Business Laptops</li>
                          <li>Apple</li>
                          <li>HP</li>
                          <li>Lenovo</li>
                          <li>Acer</li>
                          <li>Dell</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Tablets</h5>

                        <ul>
                          <li>Apple</li>
                          <li>Lenovo</li>
                          <li>Samsung</li>
                          <li>Micromax</li>
                          <li>iBall</li>
                          <li>Keyboard</li>
                          <li>Mice</li>
                          <li>Laptop Bags</li>
                          <li>PC Speakers</li>
                          <li>Batteries</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Mobiles</h5>

                        <ul>
                          <li>Samsung</li>
                          <li>Lenovo</li>
                          <li>MI</li>
                          <li>Motorola</li>
                          <li>Oppo</li>
                          <li>Panasonic</li>
                          <li>HTC</li>
                          <li>LG</li>
                          <li>Blackberry</li>
                          <li>Nokia</li>
                          <li></li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <img
                          src="/imgs/products/play.png"
                          alt="categoryImage"
                        />
                      </Grid>
                    </Grid>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(2)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Cameras & Accessories{" "}
                  <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 2 && (
                  <div className={cls.pagesDropdown}>
                    <Grid container>
                      <Grid item md={3}>
                        <h5>Laptops</h5>

                        <ul>
                          <li>Thin and Light Laptops</li>
                          <li>Gaming Laptops</li>
                          <li>Budget Laptops</li>
                          <li>Business Laptops</li>
                          <li>Apple</li>
                          <li>HP</li>
                          <li>Lenovo</li>
                          <li>Acer</li>
                          <li>Dell</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Tablets</h5>

                        <ul>
                          <li>Apple</li>
                          <li>Lenovo</li>
                          <li>Samsung</li>
                          <li>Micromax</li>
                          <li>iBall</li>
                          <li>Keyboard</li>
                          <li>Mice</li>
                          <li>Laptop Bags</li>
                          <li>PC Speakers</li>
                          <li>Batteries</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Mobiles</h5>

                        <ul>
                          <li>Samsung</li>
                          <li>Lenovo</li>
                          <li>MI</li>
                          <li>Motorola</li>
                          <li>Oppo</li>
                          <li>Panasonic</li>
                          <li>HTC</li>
                          <li>LG</li>
                          <li>Blackberry</li>
                          <li>Nokia</li>
                          <li></li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <img
                          src="/imgs/products/headphone.png"
                          alt="categoryImage"
                        />
                      </Grid>
                    </Grid>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(3)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  GPS & Car <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 3 && (
                  <div className={cls.pagesDropdown}>
                    <Grid container>
                      <Grid item md={3}>
                        <h5>Laptops</h5>

                        <ul>
                          <li>Thin and Light Laptops</li>
                          <li>Gaming Laptops</li>
                          <li>Budget Laptops</li>
                          <li>Business Laptops</li>
                          <li>Apple</li>
                          <li>HP</li>
                          <li>Lenovo</li>
                          <li>Acer</li>
                          <li>Dell</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Tablets</h5>

                        <ul>
                          <li>Apple</li>
                          <li>Lenovo</li>
                          <li>Samsung</li>
                          <li>Micromax</li>
                          <li>iBall</li>
                          <li>Keyboard</li>
                          <li>Mice</li>
                          <li>Laptop Bags</li>
                          <li>PC Speakers</li>
                          <li>Batteries</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Mobiles</h5>

                        <ul>
                          <li>Samsung</li>
                          <li>Lenovo</li>
                          <li>MI</li>
                          <li>Motorola</li>
                          <li>Oppo</li>
                          <li>Panasonic</li>
                          <li>HTC</li>
                          <li>LG</li>
                          <li>Blackberry</li>
                          <li>Nokia</li>
                          <li></li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <img
                          src="/imgs/products/laptop.png"
                          alt="categoryImage"
                        />
                      </Grid>
                    </Grid>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(4)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Electronics <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 4 && (
                  <div className={cls.pagesDropdown}>
                    <Grid container>
                      <Grid item md={3}>
                        <h5>Laptops</h5>

                        <ul>
                          <li>Thin and Light Laptops</li>
                          <li>Gaming Laptops</li>
                          <li>Budget Laptops</li>
                          <li>Business Laptops</li>
                          <li>Apple</li>
                          <li>HP</li>
                          <li>Lenovo</li>
                          <li>Acer</li>
                          <li>Dell</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Tablets</h5>

                        <ul>
                          <li>Apple</li>
                          <li>Lenovo</li>
                          <li>Samsung</li>
                          <li>Micromax</li>
                          <li>iBall</li>
                          <li>Keyboard</li>
                          <li>Mice</li>
                          <li>Laptop Bags</li>
                          <li>PC Speakers</li>
                          <li>Batteries</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Mobiles</h5>

                        <ul>
                          <li>Samsung</li>
                          <li>Lenovo</li>
                          <li>MI</li>
                          <li>Motorola</li>
                          <li>Oppo</li>
                          <li>Panasonic</li>
                          <li>HTC</li>
                          <li>LG</li>
                          <li>Blackberry</li>
                          <li>Nokia</li>
                          <li></li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <img
                          src="/imgs/products/headphone.png"
                          alt="categoryImage"
                        />
                      </Grid>
                    </Grid>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(5)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Tv & Audio <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 5 && (
                  <div className={cls.pagesDropdown}>
                    <Grid container>
                      <Grid item md={3}>
                        <h5>Laptops</h5>

                        <ul>
                          <li>Thin and Light Laptops</li>
                          <li>Gaming Laptops</li>
                          <li>Budget Laptops</li>
                          <li>Business Laptops</li>
                          <li>Apple</li>
                          <li>HP</li>
                          <li>Lenovo</li>
                          <li>Acer</li>
                          <li>Dell</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Tablets</h5>

                        <ul>
                          <li>Apple</li>
                          <li>Lenovo</li>
                          <li>Samsung</li>
                          <li>Micromax</li>
                          <li>iBall</li>
                          <li>Keyboard</li>
                          <li>Mice</li>
                          <li>Laptop Bags</li>
                          <li>PC Speakers</li>
                          <li>Batteries</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Mobiles</h5>

                        <ul>
                          <li>Samsung</li>
                          <li>Lenovo</li>
                          <li>MI</li>
                          <li>Motorola</li>
                          <li>Oppo</li>
                          <li>Panasonic</li>
                          <li>HTC</li>
                          <li>LG</li>
                          <li>Blackberry</li>
                          <li>Nokia</li>
                          <li></li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <img
                          src="/imgs/products/play.png"
                          alt="categoryImage"
                        />
                      </Grid>
                    </Grid>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(6)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Smart Phones <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 6 && (
                  <div className={cls.pagesDropdown}>
                    <Grid container>
                      <Grid item md={3}>
                        <h5>Laptops</h5>

                        <ul>
                          <li>Thin and Light Laptops</li>
                          <li>Gaming Laptops</li>
                          <li>Budget Laptops</li>
                          <li>Business Laptops</li>
                          <li>Apple</li>
                          <li>HP</li>
                          <li>Lenovo</li>
                          <li>Acer</li>
                          <li>Dell</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Tablets</h5>

                        <ul>
                          <li>Apple</li>
                          <li>Lenovo</li>
                          <li>Samsung</li>
                          <li>Micromax</li>
                          <li>iBall</li>
                          <li>Keyboard</li>
                          <li>Mice</li>
                          <li>Laptop Bags</li>
                          <li>PC Speakers</li>
                          <li>Batteries</li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <h5>Mobiles</h5>

                        <ul>
                          <li>Samsung</li>
                          <li>Lenovo</li>
                          <li>MI</li>
                          <li>Motorola</li>
                          <li>Oppo</li>
                          <li>Panasonic</li>
                          <li>HTC</li>
                          <li>LG</li>
                          <li>Blackberry</li>
                          <li>Nokia</li>
                          <li></li>
                        </ul>
                      </Grid>

                      <Grid item md={3}>
                        <img
                          src="/imgs/products/laptop.png"
                          alt="categoryImage"
                        />
                      </Grid>
                    </Grid>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className={cls.navbar__main__account}>
            <div className={cls.account}>
              <Tooltip title={t("nav.compare")} placement="top">
                <span onClick={() => router.push("/compare")}>
                  <i className="fa-light fa-code-compare"></i>
                </span>
              </Tooltip>
            </div>

            <div
              className={cls.wishlist}
              onMouseEnter={() => setNavDropdown("wishlist")}
              onMouseLeave={() => setNavDropdown("")}
            >
              <Tooltip title={t("nav.wishlist")} placement="top">
                <span onClick={() => router.push("/wishlist")}>
                  <i className="fa-light fa-heart"></i>
                </span>
              </Tooltip>

              {navDropdown === "wishlist" && (
                <div
                  className={`${cls.wishlist__dropdown} ${cls[i18n.language]}`}
                >
                  {/* <div className={cls.item}>

                    <img src="/imgs/products/laptop.png" alt="productImage" />

                    <div>

                      <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

                    </div>

                  </div>
                    
                  <div className={cls.item}>

                    <img src="/imgs/products/laptop.png" alt="productImage" />

                    <div>

                      <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

                    </div>

                  </div> */}

                  <div className="smallEmpty">
                    <img src="/imgs/empty/wishlist.png" alt="emptyImage" />
                    <h6>{t("nav.emptyWishlist")}</h6>
                  </div>

                  <div className={cls.actions}>
                    <button
                      className={cls.view}
                      onClick={() => router.push("/wishlist")}
                    >
                      {t("nav.viewWishlist")}
                    </button>

                    <button>{t("nav.clearWishlist")}</button>
                  </div>
                </div>
              )}
            </div>

            <div
              className={cls.cart}
              onMouseEnter={() => setNavDropdown("cart")}
              onMouseLeave={() => setNavDropdown("")}
            >
              <Tooltip title={t("nav.cart")} placement="top">
                <span onClick={() => router.push("/cart")}>
                  <i className="fa-light fa-cart-shopping"></i>{" "}
                  <span>$0.00</span>
                </span>
              </Tooltip>

              {navDropdown === "cart" && (
                <div className={`${cls.cart__dropdown} ${cls[i18n.language]}`}>
                  {/* <div className={cls.item}>

                    <img src="/imgs/products/laptop.png" alt="productImage" />

                    <div>

                      <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

                    </div>

                  </div> */}

                  <div className="smallEmpty">
                    <img src="/imgs/empty/cart.png" alt="emptyImage" />
                    <h6>{t("nav.emptyCart")}</h6>
                  </div>

                  <div className={cls.actions}>
                    <button
                      className={cls.view}
                      onClick={() => router.push("/cart")}
                    >
                      {t("nav.viewCart")}
                    </button>

                    <button>{t("nav.clearCart")}</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* SMALL SCREEN SIDE BAR */}
      <MobSidebar
        className={openSidebar ? cls.show : cls.hide}
        isOpen={openSidebar}
        closeMobileMenu={setOpenSidebar}
      />
    </div>
  );
};

export default Navbar;
