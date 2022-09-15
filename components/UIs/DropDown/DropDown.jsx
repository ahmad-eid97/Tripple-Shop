/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { useTranslation } from "next-i18next";

import Cookies from "universal-cookie";

// STYLES FILES
import cls from "./dropDown.module.scss";

const cookie = new Cookies();

const DropDown = ({ menu }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState(cookie.get('gridsStoreLang'));
  const { i18n } = useTranslation();

  useEffect(() => {
    setLang(cookie.get('gridsStoreLang'))
  }, [lang])

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const renderFlag = () => {
    if (lang && lang === 'ar') {
      return <img src="/imgs/navbar/suadi.png" alt="suadi" onClick={handleClick} />
    } else {
      return <img src="/imgs/navbar/america.png" alt="suadi" onClick={handleClick} />
    }
  }

  return (
    <div className={cls.dropdown}>
      {openMenu && <div className={cls.overlay} onClick={handleClose}></div>}

        {/* {lang && cookie.get('gridsStoreLang') &&
        
          <> */}
          
            {/* {lang === 'ar' && cookie.get('gridsStoreLang') === 'ar' && <img src="/imgs/navbar/suadi.png" alt="suadi" onClick={handleClick} />}
            {lang === 'en' && cookie.get('gridsStoreLang') === 'en' && <img src="/imgs/navbar/america.png" alt="suadi" onClick={handleClick} />} */}
          
          {/* </>
        
        } */}

        {renderFlag()}

        <i className="fa-solid fa-caret-down" onClick={handleClick}></i>

      <Box className={`${cls.dropdownMenu} ${openMenu ? cls.show : ""} ${cls[i18n.language]}`}>
        <ul>
          {
            menu.map((item) => (
              <li
                key={item.option}
                onClick={() => {
                  item.method(item.param);
                  handleClose();
                }}
              >
                
                {item.img && <img src={item.img} alt="flag" className={cls.flag} />}

                <p>{item.option}</p>
                
              </li>
            ))
          }
        </ul>
      </Box>

    </div>
  );
};

export default DropDown;
