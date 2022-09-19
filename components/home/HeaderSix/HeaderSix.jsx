/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import CountDown from '../../CountDown/CountDown';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { useTranslation } from 'next-i18next';

import cls from './headerSix.module.scss';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { i18n } = useTranslation();

  const tabs = [
    'So much to watch in 4k tvs',
    'Game consoles',
    'So much to watch in 4k tvs',
    'Limited week deal-gamepad'
  ]

  return (
    <div className={cls.header}>
      <div className={`${cls.header_wrapper}`}>

        <Container maxWidth="xxl">

          <Grid container spacing={5} alignItems="center">

            <Grid item xs={12} lg={8}>
          
              <div className={`${cls.header__slider} header__slider`}>

                {currentSlide === 1 && 
                  <div className={`${cls.slide} slide`}>

                    <Grid container alignItems="center" spacing={5}>

                      <Grid item xs={12} md={6}>
                        <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                        <h1 className={cls.title}>The New Standard</h1>
                        <p className={cls.price}>$749</p>
                        <div className={cls.btn}>
                          <button>Start Buying</button>
                        </div>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <img src="/imgs/header/Smartwatchess.png" alt="offerImage" />
                      </Grid>

                    </Grid>

                  </div>
                }

                {currentSlide === 2 && 
                  <div className={`${cls.slide} slide`}>

                    <Grid container alignItems="center" spacing={5}>

                      <Grid item xs={12}  md={6}>
                        <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                        <h1 className={cls.title}>The New Standard</h1>
                        <p className={cls.price}>$749</p>
                        <div className={cls.btn}>
                          <button>Start Buying</button>
                        </div>
                      </Grid>

                      <Grid item xs={12}  md={6}>
                        <img src="/imgs/header/Smartphones.png" alt="offerImage" />
                      </Grid>

                    </Grid>

                  </div>
                }

                {currentSlide === 3 && 
                  <div className={`${cls.slide} slide`}>

                    <Grid container alignItems="center" spacing={5}>

                      <Grid item xs={12} md={6}>
                        <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                        <h1 className={cls.title}>The New Standard</h1>
                        <p className={cls.price}>$749</p>
                        <div className={cls.btn}>
                          <button>Start Buying</button>
                        </div>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <img src="/imgs/header/Smartwatchess.png" alt="offerImage" />
                      </Grid>

                    </Grid>

                  </div>
                }

                {currentSlide === 4 && 
                  <div className={`${cls.slide} slide`}>

                    <Grid container alignItems="center" spacing={5}>

                      <Grid item xs={12} md={6}>

                        <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                        <h1 className={cls.title}>The New Standard</h1>
                        <p className={cls.price}>$749</p>
                        <div className={cls.btn}>
                          <button>Start Buying</button>
                        </div>

                      </Grid>

                      <Grid item xs={12} md={6}>
                        <img src="/imgs/header/iphone.png" alt="offerImage" />
                      </Grid>

                    </Grid>
                  </div>
                }

              </div>

            </Grid>

            <Grid item xs={12} lg={4}>

              <div className={`${cls.carouselTabs} ${cls[i18n.language]}`}>

                {tabs.map((tab, index) => (
                  <p key={index} className={currentSlide === index + 1 ? cls.active : ''} onClick={() => setCurrentSlide(index + 1)}>
                    <span>{tab}</span>
                  </p>
                ))}

              </div>

            </Grid>

          </Grid>
        
        </Container>

      </div>

      <Container maxWidth="xxl">
        <div className={cls.announs}>
          <Grid container justifyContent="center" spacing={3}>

            <Grid item sm={6} lg={4} xl={3}>
              <div className={cls.announs_box}>
                <img src="/imgs/header/Sounddevice.png" alt="image" />
                <div className={cls.details}>
                  <h3>Catch the hotest deals</h3>
                  <p>$300</p>
                </div>
              </div>
            </Grid>

            <Grid item sm={6} lg={4} xl={3}>
              <div className={cls.announs_box}>
                <img src="/imgs/header/annuon3.png" alt="image" />
                <div className={cls.details}>
                  <h3>Catch the hotest deals</h3>
                  <p>$300</p>
                </div>
              </div>
            </Grid>

            <Grid item sm={6} lg={4} xl={3}>
              <div className={cls.announs_box}>
                <img src="/imgs/header/headphone.png" alt="image" />
                <div className={cls.details}>
                  <h3>Catch the hotest deals</h3>
                  <p>$300</p>
                </div>
              </div>
            </Grid>

            <Grid item sm={6} lg={4} xl={3}>
              <div className={cls.announs_box}>
                <img src="/imgs/header/Sounddevice.png" alt="image" />
                <div className={cls.details}>
                  <h3>Catch the hotest deals</h3>
                  <p>$300</p>
                </div>
              </div>
            </Grid>

          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Header