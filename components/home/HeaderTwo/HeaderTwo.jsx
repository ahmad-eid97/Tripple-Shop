/* eslint-disable @next/next/no-img-element */
import PrgoressBar from '../../UIs/ProgressBar/ProgressBar';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import cls from './headerTwo.module.scss';

const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.header_wrapper}>

        <Container maxWidth="xxl">
          <Carousel className={`${cls.header__slider} header__slider`} autoPlay={true} infiniteLoop={true} showArrows={false} swipeable={true} showStatus={false} interval={5000}>
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
                      <h4 className={cls.label}>SHOP WHAT YOU LOVE</h4>
                      <h2 className={cls.title}>$3,299.00</h2>
                      <div className={cls.offerData}>
                        <p>Available: <span>72</span></p>
                        <p>Already Sold: <span>22</span></p>
                      </div>
                      <PrgoressBar percentage={50} />
                    </div>
                  </Grid>

                </Grid>

              </div>

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
                      <h4 className={cls.label}>SHOP WHAT YOU LOVE</h4>
                      <h2 className={cls.title}>$3,299.00</h2>
                      <div className={cls.offerData}>
                        <p>Available: <span>72</span></p>
                        <p>Already Sold: <span>22</span></p>
                      </div>
                      <PrgoressBar percentage={50} />
                    </div>
                  </Grid>

                </Grid>

              </div>

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
                      <h4 className={cls.label}>SHOP WHAT YOU LOVE</h4>
                      <h2 className={cls.title}>$3,299.00</h2>
                      <div className={cls.offerData}>
                        <p>Available: <span>72</span></p>
                        <p>Already Sold: <span>22</span></p>
                      </div>
                      <PrgoressBar percentage={50} />
                    </div>
                  </Grid>

                </Grid>
              </div>
          </Carousel>
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