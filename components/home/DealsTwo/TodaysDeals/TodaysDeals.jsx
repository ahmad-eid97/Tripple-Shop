import MiniProductBox from '../../../MiniProductBox/MiniProductBox';

import Grid from '@mui/material/Grid';

import cls from './todaysDeals.module.scss';

const TodaysDeals = () => {
  return (
    <div className={cls.todayDeals}>

      <Grid container className={cls.grid}>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <MiniProductBox />

        </Grid>

      </Grid>

    </div>
  )
}

export default TodaysDeals