import { useState, useEffect } from 'react';

import { useRouter } from "next/router";

import DropDown from './../../UIs/DropDown/DropDown';

import { useTranslation } from "next-i18next";

import Cookies from 'universal-cookie';
const cookie = new Cookies();

import cls from './langSwitch.module.scss'

const LangSwitch = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation('nav');

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const switchLang = (lang) => {
    i18n.changeLanguage(lang)
    cookie.set('gridsStoreLang', lang, {path: "/"})

    if (lang === 'ar') {
      router.replace(router, null, { locale: lang });
    } else {
      router.replace(router, router.asPath, { locale: lang });
    }
  }

  const menu = [
    {
      option: `${t('nav.english')}`,
      img: "/imgs/navbar/america.png",
      method: switchLang,
      param: 'en'
    },
    {
      option: `${t('nav.arabic')}`,
      img: "/imgs/navbar/suadi.png",
      method: switchLang,
      param: 'ar'
    },
  ];

  if (!hasMounted) return null;

  return (
    <div className={cls.lang}>
      <DropDown menu={menu} side={true} />
    </div>
  )
}

export default LangSwitch