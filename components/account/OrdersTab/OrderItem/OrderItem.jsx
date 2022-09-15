/* eslint-disable @next/next/no-img-element */
import cls from './orderItem.module.scss';

const OrderItem = () => {
  return (
    <div className={cls.orderItem}>

      <div className={cls.orderItem__head}>

        <p>Order Id: <span>1213424</span></p>

        <p>Order Status: <span>Delivered</span></p>

      </div>

      <div className={cls.orderItem__order}>

        <div className={cls.product}>
          <img src="/imgs/products/laptop.png" alt="productImage" />

          <div>

            <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

            <button>Track order</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default OrderItem