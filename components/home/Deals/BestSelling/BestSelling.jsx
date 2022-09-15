import ProductBox from './../../../ProductBox/ProductBox';

import Grid from '@mui/material/Grid';

import cls from './bestSelling.module.scss';

const BestSelling = () => {
  return (
    <div className={cls.bestSelling}>

      <Grid container>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>

          <ProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>

          <ProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>

          <ProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>

          <ProductBox />

        </Grid>

      </Grid>

    </div>
  )
}

export default BestSelling