import { useState, useEffect, use } from "react";

import { useRouter } from "next/router";

import DropDownCurrency from "../../UIs/DropDownCurrency/DropDownCurrency";

import { useTranslation } from "next-i18next";

import Cookies from "universal-cookie";
const cookie = new Cookies();

import cls from "./currencySwitch.module.scss";

const CurrencySwitch = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // const CurrencySwitch = (currency) => {
  //   i18n.changeLanguage(lang);
  //   cookie.set("grids-apps-shop-lang", currency, { path: "/" });

  // };

  const menu = [
    {
      text: "USD",
    },
    {
      text: "EUR",
    },
    {
      text: "EGP",
    },
  ];

  if (!hasMounted) return null;

  return (
    <div className={cls.headerDropdown}>
      <DropDownCurrency menu={menu} side={true} />
    </div>
  );
};

export default CurrencySwitch;
