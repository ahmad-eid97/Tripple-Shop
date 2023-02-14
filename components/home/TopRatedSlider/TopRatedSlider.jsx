import { useEffect, useRef } from 'react';

import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './topRatedSlider.module.scss'; 

const TopRatedSlider = () => {
  const animatingContainer = useRef();
  const { t, i18n } = useTranslation() 

  useEffect(() => {
    if (animatingContainer.current) {
      setInterval(() => {
        if (animatingContainer.current) {
          animatingContainer.current.classList.remove('animationOn')
        }
      }, 20000);
    }
  }, [animatingContainer])

  return (
    <Container maxWidth="xxl">

      <div className={cls.topRatedSlider}>

        <button>Top Rated Products</button>

        <div className={cls.slidingText}>

          <div className={`${cls.internalWrapper} ${cls.animationOn} animationOn ${cls[i18n.language]}`} ref={animatingContainer}>

            <p>Dell Vostro 3500 laptop - 11th Intel core</p>
            <p>Dell Vostro 3500 laptop - 11th Intel core</p>
            <p>Dell Vostro 3500 laptop - 11th Intel core</p>
            <p>Dell Vostro 3500 laptop - 11th Intel core</p>
            <p>Dell Vostro 3500 laptop - 11th Intel core</p>
            <p>Dell Vostro 3500 laptop - 11th Intel core</p>

          </div>

        </div>

      </div>

    </Container>
  )
}

export default TopRatedSlider;