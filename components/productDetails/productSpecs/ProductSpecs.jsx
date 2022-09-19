import { useState } from 'react';

import DescriptionTab from './DescriptionTab/DescriptionTab';
import SpecificationsTab from './SpecificationsTab/SpecificationsTab';
import ReviewsTab from './ReviewsTab/ReviewsTab';

import { useTranslation } from 'next-i18next';

import cls from './productSpecs.module.scss';

const ProductSpecs = () => {
  const [activeTab, setActiveTab] = useState('description');
  const { t } = useTranslation('common')

  const renderView = () => {
    switch(activeTab) {
      case "description":
        return <DescriptionTab />
      case "specifications":
        return <SpecificationsTab />
      case "reviews":
        return <ReviewsTab />
    }
  }

  return (
    <div className={cls.productSpecs}>

      <div className={cls.productSpecs__tabs}>

        <span className={activeTab === 'description' ? cls.active : ''} onClick={() => setActiveTab('description')}><span></span>{t('product.description')}</span>

        <span className={activeTab === 'specifications' ? cls.active : ''} onClick={() => setActiveTab('specifications')}><span></span>{t('product.specifications')}</span>

        <span className={activeTab === 'reviews' ? cls.active : ''} onClick={() => setActiveTab('reviews')}><span></span>{t('product.reviews')}</span>

      </div>

      <div className={cls.productSpecs__viewArea}>

        {renderView()}

      </div>

    </div>
  )
}

export default ProductSpecs