/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import CountDown from './../../CountDown/CountDown';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import cls from './headerFour.module.scss';

const Header = ({ top }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

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

          {top && 

            <div className={`${cls.carouselTabs} ${cls.top}`}>

              {tabs.map((tab, index) => (
                <p key={index} className={currentSlide === index + 1 ? cls.active : ''} onClick={() => setCurrentSlide(index + 1)}>
                  <span className={cls.num}>{index + 1}</span> <span className={cls.text}>{tab}</span>
                </p>
              ))}

            </div>
          
          }
          
          <div className={`${cls.header__slider} header__slider`}>

            {currentSlide === 1 && 
              <div className={`${cls.slide} slide`}>

                <Grid container alignItems="center" spacing={5}>

                  <Grid item xs={12} md={4}>
                    <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                    <h1 className={cls.title}>The New Standard</h1>
                    <p className={cls.price}>$749</p>
                    <div className={cls.btn}>
                      <button>Start Buying</button>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <img src="/imgs/header/Smartwatchess.png" alt="offerImage" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <div className={`${cls.aboutOffer} aboutOffer`}>
                      <h4 className={`${cls.label} ${cls.label2}`}>SHOP WHAT YOU LOVE</h4>
                      <h2 className={`${cls.title} ${cls.title2}`}>$3,299.00</h2>
                      <CountDown daysCount={30} />
                    </div>
                  </Grid>

                </Grid>

              </div>
            }

            {currentSlide === 2 && 
              <div className={`${cls.slide} slide`}>

                <Grid container alignItems="center" spacing={5}>

                  <Grid item xs={12}  md={4}>
                    <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                    <h1 className={cls.title}>The New Standard</h1>
                    <p className={cls.price}>$749</p>
                    <div className={cls.btn}>
                      <button>Start Buying</button>
                    </div>
                  </Grid>

                  <Grid item xs={12}  md={4}>
                    <img src="/imgs/header/Smartphones.png" alt="offerImage" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <div className={`${cls.aboutOffer} aboutOffer`}>
                      <h4 className={`${cls.label} ${cls.label2}`}>SHOP WHAT YOU LOVE</h4>
                      <h2 className={`${cls.title} ${cls.title2}`}>$3,299.00</h2>
                      <CountDown daysCount={30} />
                    </div>
                  </Grid>

                </Grid>

              </div>
            }

            {currentSlide === 3 && 
              <div className={`${cls.slide} slide`}>

                <Grid container alignItems="center" spacing={5}>

                  <Grid item xs={12} md={4}>
                    <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                    <h1 className={cls.title}>The New Standard</h1>
                    <p className={cls.price}>$749</p>
                    <div className={cls.btn}>
                      <button>Start Buying</button>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <img src="/imgs/header/Smartwatchess.png" alt="offerImage" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <div className={`${cls.aboutOffer} aboutOffer`}>
                      <h4 className={`${cls.label} ${cls.label2}`}>SHOP WHAT YOU LOVE</h4>
                      <h2 className={`${cls.title} ${cls.title2}`}>$3,299.00</h2>
                      <CountDown daysCount={30} />
                    </div>
                  </Grid>

                </Grid>

              </div>
            }

            {currentSlide === 4 && 
              <div className={`${cls.slide} slide`}>

                <Grid container alignItems="center" spacing={5}>

                  <Grid item xs={12} md={4}>

                    <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                    <h1 className={cls.title}>The New Standard</h1>
                    <p className={cls.price}>$749</p>
                    <div className={cls.btn}>
                      <button>Start Buying</button>
                    </div>

                  </Grid>

                  <Grid item xs={12} md={4}>
                    <img src="/imgs/header/iphone.png" alt="offerImage" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <div className={`${cls.aboutOffer} aboutOffer`}>
                      <h4 className={`${cls.label} ${cls.label2}`}>SHOP WHAT YOU LOVE</h4>
                      <h2 className={`${cls.title} ${cls.title2}`}>$3,299.00</h2>
                      <CountDown daysCount={30} />
                    </div>
                  </Grid>

                </Grid>
              </div>
            }

          </div>

          {!top && 
            <div className={cls.carouselTabs}>

              {tabs.map((tab, index) => (
                <p key={index} className={currentSlide === index + 1 ? cls.active : ''} onClick={() => setCurrentSlide(index + 1)}>
                  <span className={cls.num}>{index + 1}</span> <span className={cls.text}>{tab}</span>
                </p>
              ))}

            </div>
          }
        
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