/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import { useTranslation } from 'next-i18next';

import cls from './topProducts.module.scss';

const TopProducts = () => {
  const { t } = useTranslation('common')

  return (
    <div className={cls.topProducts}>

      <Container maxWidth="xxl">

        <Grid container spacing={5} justifyContent="center">

          <Grid item xs={12} sm={6} xl={3}>

            <h4><span></span>{t('product.featured')}</h4>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <span className={cls.price}>$300</span>

              </div>

            </div>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <span className={cls.price}>$300</span>

              </div>

            </div>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <span className={cls.price}>$300</span>

              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} xl={3}>

            <h4><span></span>{t('product.onSale')}</h4>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <span className={cls.price}>$300</span>

              </div>

            </div>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <span className={cls.price}>$300</span>

              </div>

            </div>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <span className={cls.price}>$300</span>

              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} xl={3}>

            <h4><span></span>{t('product.topRated')}</h4>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <Rating name="read-only" value={4} readOnly />
                <span className={cls.price}>$300</span>

              </div>

            </div>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <Rating name="read-only" value={4} readOnly />
                <span className={cls.price}>$300</span>

              </div>

            </div>

            <div className={cls.topProducts__product}>

              <img src="/imgs/products/laptop.png" alt="productImage" />

              <div>

                <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7</h6>
                <Rating name="read-only" value={4} readOnly />
                <span className={cls.price}>$300</span>

              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} xl={3}>
            <img src="/imgs/products/panner1.jpg" alt="productPanner" />
          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default TopProducts