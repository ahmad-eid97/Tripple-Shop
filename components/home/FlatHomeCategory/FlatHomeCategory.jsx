import { useState } from 'react';

import ProductBox from '../../ProductBox/ProductBox';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './flatHomeCategory.module.scss';

const HomeCategory = ({ rounded }) => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { i18n } = useTranslation();

  const breakpoints = {
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  }

  const renderView = () => {
    switch(currentCategory) {
      case 1:
        return (
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
          </Swiper>
        )
      case 2:
        return (
          <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
            </Swiper>
        )
      case 3:
        return (
          <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
            </Swiper>
        )
      case 4:
        return (
          <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
            </Swiper>
        )
    }
  }

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>

      <Container maxWidth="xxl">

        <div className={cls.homeCategory__wrapper}>

          <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

            <h3>Electronics</h3>

            <div>
              <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Labtops</span>
              <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>Memory Cards</span>
              <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>External Hard Drives</span>
              <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>SSDs</span>
            </div>

          </div>

          <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>

            {renderView()}

          </div>

        </div>

      </Container>

    </div>
  )
}

export default HomeCategory