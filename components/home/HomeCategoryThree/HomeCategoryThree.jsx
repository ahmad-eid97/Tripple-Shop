/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import MiniProductBox from '../../MiniProductBox/MiniProductBox';
import CountDown from '../../CountDown/CountDown';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './homeCategoryThree.module.scss';

const HomeCategory = () => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const { i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory}`}>

      <Container maxWidth="xxl">

        <div className={cls.homeCategory__wrapper}>

          <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

            <h3>Smart phones & tablets</h3>

            <div>
              <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Best Selling</span>
              <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>17 Inch</span>
              <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>15 Inch</span>
              <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>12 Inch</span>
            </div>

          </div>

          <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>

            <div className={cls.categoriesList}>
              <ul>
                <li><span>Accessories</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>All In one</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Audio Speakers</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Bluetooth Speakers</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Cameras</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Cameras & Photography</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Cases</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Chargers</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Computer Cases</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
                <li><span>Labtops</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
              </ul>
            </div>

            <div className={cls.panner}>

              <img src="/imgs/products/panner2.jpg" alt="pannerImage" />

            </div>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

          </div>

        </div>

      </Container>

    </div>
  )
}

export default HomeCategory