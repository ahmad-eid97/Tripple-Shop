import { useRef } from "react";

import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";

import Link from 'next/link'
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import cls from "./MobSidebar.module.scss";

const MobileMenu = ({ isOpen, closeMobileMenu }) => {
  const router = useRouter()
  let backdrop = useRef();
  const { t, i18n } = useTranslation();

  // COMPONENT HANDLERS
  const close = () => {
    closeMobileMenu(false);
  };

  const closeMenu = (e) => {
    if (backdrop.current === e.target) {
      closeMobileMenu(false);
    }
  };

  const navigateBtns = (link) => {
    router.push(link)
    close()
  }

  return (
    <div
      className={`${cls.backdrop} ${isOpen ? cls.show : cls.hide}`}
      onClick={(e) => closeMenu(e)}
      ref={backdrop}
    >
      <div className={`${cls.mobileMenu} ${cls[i18n.language]}`}>
        <div className={cls.head}>
          <button onClick={() => navigateBtns('/account')}>
            <i className={`fa-light fa-user ${cls.with}`}></i>
          </button>
          <button onClick={() => navigateBtns('/wishlist')}>
            <i className={`fa-light fa-heart ${cls.with}`}></i>
          </button>
          <button>
            <ModeSwitch />
          </button>
          <button className={cls[i18n.language]}>
            <LangSwitch />
          </button>
        </div>

        <div className={cls.items}>
          <ul>
            <Link href="/" passHref>
              <li onClick={close} className={`${router.pathname == "/" ? cls.active : ""}`}>
                <i className={`fa-light fa-star ${cls[i18n.language]}`}></i>
                {t('nav.home')}
              </li>
            </Link>
            <Link href="/about" passHref>
              <li onClick={close} className={`${router.pathname == "/about" ? cls.active : ""}`}>
                <i className={`fa-light fa-star ${cls[i18n.language]}`}></i>
                {t('nav.about')}
              </li>
            </Link>
            <Link href="/blogs" passHref>
              <li onClick={close} className={`${router.pathname == "/blogs" ? cls.active : ""}`}> 
                <i className={`fa-light fa-star ${cls[i18n.language]}`}></i>
                {t('nav.blogs')}
              </li>
            </Link>
            <Link href="/pages" passHref>
              <li onClick={close} className={`${router.pathname == "/pages" ? cls.active : ""}`}>
                <i className={`fa-light fa-star ${cls[i18n.language]}`}></i>
                {t('nav.pages')}
              </li>
            </Link>
            <Link href="/policy" passHref>
              <li onClick={close} className={`${router.pathname == "/policy" ? cls.active : ""}`}>
                <i className={`fa-light fa-star ${cls[i18n.language]}`}></i>
                {t('nav.policy')}
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li onClick={close} className={`${router.pathname == "/contact" ? cls.active : ""}`}>
                <i className={`fa-light fa-star ${cls[i18n.language]}`}></i>
                {t('nav.contact')}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
