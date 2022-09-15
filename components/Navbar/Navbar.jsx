/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import TopNav from "./TopNav/TopNav";
import LangSwitch from "../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../switches/ModeSwitch/ModeSwitch";
import MobSidebar from "./MobSidebar/MobSidebar";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from "./navbar.module.scss";

const Navbar = ({ rounded }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navDropdown, setNavDropdown] = useState('');
  const router = useRouter();
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>
      <TopNav />
      <Container maxWidth="xxl" className={`${cls.navbar_mainNav}`}>
        <div className={cls.logo}>
          <h1>Tripple Shop</h1>
        </div>

        <div className={cls.links}>
          <ul>

            <li className={`${router.pathname == "/" ? cls.active : ""}`}>
              <Link href="/" exact>
                Home
              </Link>
            </li>

            <li
              className={`${router.pathname == "/about" ? cls.active : ""}`}
            >
              <Link href="/about">
                  About Us
              </Link>
            </li>

            <li
              className={`${router.pathname == "/blogs" ? cls.active : ""}`}
            >
              <Link href="/">
                  Blogs
              </Link>
            </li>

            <li
              className={`${router.pathname == "/pages" ? cls.active : ""}`}
              onMouseEnter={() => setNavDropdown('pages')}
              onMouseLeave={() => setNavDropdown('')}
            >
              <Link href="/">
                  <span>Pages <i className="fa-light fa-caret-down"></i></span>
              </Link>

              {navDropdown === 'pages' && 

                <div className={cls.pagesDropdown}>

                </div>
              
              }

            </li>

            <li
              className={`${
                router.pathname == "/policy" ? cls.active : ""
              }`}
            >
                <Link href="/policy">
                Policy
                </Link>
            </li>

            <li
              className={`${router.pathname == "/contact" ? cls.active : ""}`}
            >
              <Link href="/contact">
                  Contact Us
              </Link>
            </li>
            
          </ul>
        </div>

        <div className={cls.support}>
          <i className="fa-thin fa-hands-holding-heart"></i>

          <div>
            <h6>Support: 01025864313</h6>
            <span>Email: info@tripple.com</span>
          </div>
        </div>
      </Container>

      <div className={cls.navbar__search}>
        <Container maxWidth="xxl" className={`${cls.search__wrapper}`}>
          <div className={cls.smallLogo}>
            <i
              className="fa-light fa-grid-2"
              onClick={() => setOpenSidebar(!openSidebar)}
            ></i>{" "}
            <h5>Tripple Shop</h5>
          </div>

          <div className={cls.switches}>
            <LangSwitch />

            <ModeSwitch />
          </div>

          <div className={`${cls.navbar__search__searchArea} ${cls.rounded} ${rounded ? cls.rounded : ''} ${cls[i18n.language]}`}>
            <input type="text" placeholder="Search" />

            <button>
              <i className="fa-light fa-magnifying-glass"></i>
            </button>
          </div>

          <div className={cls.navbar__search__account}>

            <div className={cls.account}>
              <Tooltip title="Compare" placement="top">
                <span onClick={() => router.push('/compare')}>
                  <i className="fa-light fa-code-compare"></i>
                </span>
              </Tooltip>
            </div>

            <div className={cls.wishlist} onMouseEnter={() => setNavDropdown('wishlist')} onMouseLeave={() => setNavDropdown('')}>
              <Tooltip title="Wishlist" placement="top">
                <span onClick={() => router.push('/wishlist')}>
                  <i className="fa-light fa-heart"></i>
                </span>
              </Tooltip>

              {navDropdown === 'wishlist' && 
                <div className={`${cls.wishlist__dropdown} ${cls[i18n.language]}`}>
                    
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

                  <div className='smallEmpty'>
                    <img src="/imgs/empty/wishlist.png" alt="emptyImage" />
                    <h6>You have no returns yet!</h6>
                  </div>

                  <div className={cls.actions}>

                    <button className={cls.view} onClick={() => router.push('/wishlist')}>view wishlist</button>

                    <button>clear wishlist</button>

                  </div>
                </div>
              }

            </div>

            <div className={cls.cart} onMouseEnter={() => setNavDropdown('cart')} onMouseLeave={() => setNavDropdown('')}>
              <Tooltip title="Cart" placement="top">
                <span onClick={() => router.push('/cart')}>
                  <i className="fa-light fa-cart-shopping"></i> <span>$0.00</span>
                </span>
              </Tooltip>

              {navDropdown === "cart" && 
                <div className={`${cls.cart__dropdown} ${cls[i18n.language]}`}>
                  
                  {/* <div className={cls.item}>

                    <img src="/imgs/products/laptop.png" alt="productImage" />

                    <div>

                      <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

                    </div>

                  </div> */}

                  <div className='smallEmpty'>
                    <img src="/imgs/empty/cart.png" alt="emptyImage" />
                    <h6>You have no returns yet!</h6>
                  </div>

                  <div className={cls.actions}>

                    <button className={cls.view} onClick={() => router.push('/cart')}>view cart</button>

                    <button>clear cart</button>

                  </div>

                </div>
              }
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
