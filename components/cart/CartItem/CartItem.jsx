/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { useTranslation } from 'next-i18next';

import cls from './cartItem.module.scss';

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const { i18n } = useTranslation('common')

  const changeQuantity = (type, value) => {
    if (type === 'plus') setQuantity(prev => (prev += 1))
    else {
      if (quantity > 1) {
        setQuantity(prev => (prev -= 1))
      }
    }
  } 

  return (
    <div className={cls.cartItem}>

      <div className={cls.product}>
        <img src="/imgs/products/laptop.png" alt="productImage" />
        <h5>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h5>
      </div>

      <p className={cls.price}><span>Price:</span> $2000</p>

      <div className={`${cls.quantityArea} quantityArea`}>
        <button onClick={() => changeQuantity('minus')}>-</button>
        <input type="number" className={i18n.language} value={quantity} onChange={() => {}} />
        <button onClick={() => changeQuantity('plus')}>+</button>
      </div>

      <p className={cls.total}><span>Total:</span> $2000</p>

      <div className={cls.delete}>
        <i className="fa-solid fa-trash-can"></i>
      </div>

    </div>
  )
}

export default CartItem;