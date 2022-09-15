/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import OrderItem from './OrderItem/OrderItem';

import Pagination from '@mui/material/Pagination';

import cls from './ordersTab.module.scss'

const OrdersTab = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const changePage = (e, pageNum) => {
    setPageNumber(pageNum);
  };

  return (
    <div className={cls.ordersTab}>

      <OrderItem />
      <OrderItem />
      <OrderItem />

      <div className={`${cls.pagination} pagination`}>
        <Pagination count={20} page={pageNumber} onChange={changePage} />
      </div>

      {/* <div className='empty'>
        <img src="/imgs/empty/cart.png" alt="emptyImage" />
        <h6>You have no orders yet!</h6>
      </div> */}

    </div>
  )
}

export default OrdersTab