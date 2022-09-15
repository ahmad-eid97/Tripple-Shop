import { useRef } from "react";

import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";

import Link from 'next/link'
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import cls from "./accountMobSidebar.module.scss";

const AccountMobSidebar = ({ isOpen, closeMobileMenu, activeTab, setActiveTab }) => {
  const router = useRouter()
  let backdrop = useRef();
  const { t, i18n } = useTranslation();

  // COMPONENT HANDLERS
  const close = (tab) => {
    if (tab) {
      setActiveTab(tab)
    }
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

        <div className={cls.items}>
          <ul>
            <li onClick={() => close('personal')} className={`${activeTab == "personal" ? cls.active : ""}`}>
              <i className={`${cls[i18n.language]} fa-light fa-user`}></i>
              Personal
            </li>
            <li  onClick={() => close('addresses')} className={`${activeTab == "addresses" ? cls.active : ""}`}>
              <i className={`fa-light fa-location-dot ${cls[i18n.language]}`}></i>
              Addresses
            </li>
            <li  onClick={() => close('orders')} className={`${activeTab == "orders" ? cls.active : ""}`}> 
              <i className={`fa-regular fa-box-circle-check ${cls[i18n.language]}`}></i>
              Orders
            </li>
            <li  onClick={() => close('returns')} className={`${activeTab == "returns" ? cls.active : ""}`}>
              <i className={`fa-regular fa-rotate-left ${cls[i18n.language]}`}></i>
              Returns
            </li>
            <li  onClick={() => close('support')} className={`${activeTab == "support" ? cls.active : ""}`}>
              <i className={`fa-light fa-headset ${cls[i18n.language]}`}></i>
              Support
            </li>
            <li  onClick={() => close()}>
              <i className={`fa-regular fa-right-from-bracket ${cls[i18n.language]}`}></i>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountMobSidebar;
