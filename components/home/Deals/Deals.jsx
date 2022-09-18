import { useState } from "react";

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';

import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import cls from './deals.module.scss';

const Deals = () => {
  const [activeTab, setActiveTab] = useState('today')
  const { t, i18n } = useTranslation('common')

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

        <div className={cls.tabs}>

          <span className={activeTab === 'today' ? cls.active : ''} onClick={() => setActiveTab('today')}><span></span>{t('deals.today')}</span>

          <span className={activeTab === 'featured' ? cls.active : ''} onClick={() => setActiveTab('featured')}><span></span>{t('deals.featured')}</span>

          <span className={activeTab === 'best' ? cls.active : ''} onClick={() => setActiveTab('best')}><span></span>{t('deals.best')}</span>

        </div>

        <div className={cls.view}>

        {renderView()}

        </div>

      </Container>

    </div>
  )
}

export default Deals