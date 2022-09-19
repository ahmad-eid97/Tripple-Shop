/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import cls from './returnItem.module.scss';

const OrderItem = () => {
  const { t } = useTranslation('common');

  return (
    <div className={cls.returnItem}>

      <div className={cls.returnItem__head}>

        <p>{t('account.returnId')} <span>1213424</span></p>

        <p>{t('account.returnStatus')} <span>Completed</span></p>

      </div>

      <div className={cls.returnItem__order}>

        <div className={cls.product}>
          <img src="/imgs/products/laptop.png" alt="productImage" />

          <div>

            <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

            <button>{t('account.viewDetails')}</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default OrderItem