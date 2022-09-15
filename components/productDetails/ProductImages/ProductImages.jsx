/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './productImages.module.scss';

const images = [
  "/imgs/products/laptop.png",
  "/imgs/products/laptop.png",
  "/imgs/products/monitor3.webp",
  "/imgs/products/laptop.png",
  "/imgs/products/monitor2.webp",
  "/imgs/products/laptop.png",
  "/imgs/products/monitor.jpg",
  "/imgs/products/laptop.png"
]

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  const breakpoints = {
    // when window width is >= 640px
    200: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 6,
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

  return (
    <div className={cls.productImages}>

      <div className={cls.productImages__mainImage}>
        <img src={selectedImage} alt="productMainImage" />
      </div>

      <div className={cls.productImages__allImages}>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation
          breakpoints={breakpoints}
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img src={image} alt="categoryName" className={selectedImage === image ? cls.active : ''} onClick={() => setSelectedImage(image)} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </div>
  )
}

export default ProductImages