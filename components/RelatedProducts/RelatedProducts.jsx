import Grid from '@mui/material/Grid';

import cls from './relatedProducts.module.scss';
import ProductBox from './../ProductBox/ProductBox';

const RelatedProducts = () => {
  return (
    <div className={cls.relatedProducts}>

      <h3>Related Products <p></p></h3>

      <Grid container columnSpacing={3}>

        <Grid item xs={12} sm={6} md={4} lg={3}>

          <ProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>

          <ProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>

          <ProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>

          <ProductBox />

        </Grid>

      </Grid>

    </div>
  )
}

export default RelatedProducts