/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import cls from './categories.module.scss';

const Categories = () => {
  const router = useRouter()

  const breakpoints = {
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 7,
    },
  }

  const categories = [
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
    {
      name: 'Electronics',
      img: '/imgs/products/laptop.png'
    },
  ]

  return (
    <div className={cls.categories}>

      <Container maxWidth="xxl">
        <div className={cls.categories__head}>

          <button>Top Categories In This Week</button>

        </div>

        <div className={cls.categories__allCategories}>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            navigation
            breakpoints={breakpoints}
          >
            {categories.map((cate, idx) => (
              <SwiperSlide key={idx}>
                <div className={cls.singleCategory} onClick={() => router.push('/category/123')}>

                  <img src={cate.img} alt="categoryName" />

                  <h5>{cate.name}</h5>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </Container>

    </div>
  )
}

export default Categories