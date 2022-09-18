/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';
import CountDown from './../../CountDown/CountDown';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";

import cls from './dealsTwo.module.scss';

const DealsTwo = () => {
  const [activeTab, setActiveTab] = useState('today');
  const { t, i18n } = useTranslation('common');

  const renderView = () => {
    switch(activeTab) {
      case 'today': 
        return <TodaysDeals />
      case 'featured':
        return <FeaturedProducts />
      case 'best':
        return <BestSelling />
    }
  }

  return (
    <div className={cls.deals}>

      <Container maxWidth="xxl">

        <Grid container spacing={3}>

          <Grid item xs={12} md={4} xl={3}>

            <div className={cls.offerSaving}>

              <div className={cls.offerSaving__header}>

                <h3>{t('deals.special')}</h3>

                <div className={cls.offerSaving__header__badge}>

                  <p>{t('deals.save')}</p>

                  <span>$20.00</span>

                </div>

              </div>

              <div className={cls.offerSaving__product}>

                <img src="/imgs/products/play.png" alt="offerImage" />

                <h5>Game Console Controller +USB 3.0 Cable</h5>

                <div className={cls.price}>

                  <h1>$79.00</h1>

                  <span>$99.00</span>

                </div>

              </div>

              <div className={cls.offerSaving__footer}>

                <CountDown daysCount={0.6} />

              </div>

            </div>

          </Grid>

          <Grid item md={8} xl={9}>

            <div className={cls.tabs}>

              <span className={activeTab === 'today' ? cls.active : ''} onClick={() => setActiveTab('today')}><span></span>{t('deals.today')}</span>

              <span className={activeTab === 'featured' ? cls.active : ''} onClick={() => setActiveTab('featured')}><span></span>{t('deals.featured')}</span>

              <span className={activeTab === 'best' ? cls.active : ''} onClick={() => setActiveTab('best')}><span></span>{t('deals.best')}</span>

            </div>

            <div className={cls.view}>

              {renderView()}

            </div>

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default DealsTwo;