/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { useTranslation } from "next-i18next";

import Cookies from "universal-cookie";

// STYLES FILES
import cls from "./dropDownCurrency.module.scss";

const cookie = new Cookies();

const DropDown = ({ menu }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currency, setCurrency] = useState(cookie.get("grids-apps-shop-currency") || 'USD');

  useEffect(() => {
    setCurrency(cookie.get("grids-apps-shop-currency"));
  }, [cookie.get("grids-apps-shop-currency")]);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };
  
  return (
    <div className={cls.dropdown}>
      {openMenu && <div className={cls.overlay} onClick={handleClose}></div>}

      <span onClick={handleClick}>{menu.find((item) => item.text === currency).text}</span>
      
      <i className="fa-solid fa-angle-down" onClick={handleClick}></i>

      <Box
        className={`${cls.dropdownMenu} ${openMenu ? cls.show : ""}`}
      >
        <ul>
          {menu.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                item.method(item.text);
                handleClose();
              }}
            >
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default DropDown;
