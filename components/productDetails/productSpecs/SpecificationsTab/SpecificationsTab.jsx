import cls from './specificationsTab.module.scss';

const SpecificationsTab = () => {
  return (
    <div className={cls.specificationsTab}>

      <h4>Technical Specifications</h4>

      <div className={cls.specificationsTab__spec}>

        <p>Brand</p>

        <span>Dell</span>

      </div>

      <div className={cls.specificationsTab__spec}>

        <p>Item Height</p>

        <span>	18 Millimeters</span>

      </div>

      <div className={cls.specificationsTab__spec}>

        <p>Item Width</p>

        <span>31.4 Centimeters</span>

      </div>

      <div className={cls.specificationsTab__spec}>

        <p>Screen Size</p>

        <span>13 Inches</span>

      </div>

      <div className={cls.specificationsTab__spec}>

        <p>Item Weight</p>

        <span>1.6 Kg</span>

      </div>

    </div>
  )
}

export default SpecificationsTab