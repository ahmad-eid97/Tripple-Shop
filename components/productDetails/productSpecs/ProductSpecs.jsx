import { useState } from 'react';

import DescriptionTab from './DescriptionTab/DescriptionTab';
import SpecificationsTab from './SpecificationsTab/SpecificationsTab';
import ReviewsTab from './ReviewsTab/ReviewsTab';

import cls from './productSpecs.module.scss';

const ProductSpecs = () => {
  const [activeTab, setActiveTab] = useState('description')

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

        <span className={activeTab === 'description' ? cls.active : ''} onClick={() => setActiveTab('description')}><span></span>Description</span>

        <span className={activeTab === 'specifications' ? cls.active : ''} onClick={() => setActiveTab('specifications')}><span></span>Specifications</span>

        <span className={activeTab === 'reviews' ? cls.active : ''} onClick={() => setActiveTab('reviews')}><span></span>Reviews</span>

      </div>

      <div className={cls.productSpecs__viewArea}>

        {renderView()}

      </div>

    </div>
  )
}

export default ProductSpecs