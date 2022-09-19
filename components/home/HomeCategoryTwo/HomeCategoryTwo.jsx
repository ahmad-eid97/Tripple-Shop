/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import MiniProductBox from './../../MiniProductBox/MiniProductBox';
import CountDown from './../../CountDown/CountDown';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './homeCategoryTwo.module.scss';

const HomeCategory = () => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { t, i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory}`}>

      <Container maxWidth="xxl">

        <div className={cls.homeCategory__wrapper}>

          <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

            <div>
              <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Labtops</span>
              <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>Memory Cards</span>
              <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>External Hard Drives</span>
              <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>SSDs</span>
            </div>

          </div>

          <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

            <div className={cls.side}>

              <MiniProductBox />

            </div>

            <div className={cls.center}>

              <div className={cls.centerOffer}>

                <span className={cls.label}>Electronics</span>

                <h3>Ultra Wirless S50 Headphones</h3>

                <img src="/imgs/products/headphone.png" alt="productImage" />

                <CountDown daysCount={0.8} />

                <div className={cls.addToCart}>

                  <div className={cls.price}>

                    <h1>$300</h1>

                    <span>$320</span>

                  </div>

                  <button>{t('product.addCart')}</button>

                </div>

              </div>

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