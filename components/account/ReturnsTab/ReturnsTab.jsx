/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import ReturnItem from './ReturnItem/ReturnItem';

import Pagination from '@mui/material/Pagination';

import cls from './returnsTab.module.scss'

const ReturnsTab = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const changePage = (e, pageNum) => {
    setPageNumber(pageNum);
  };

  return (
    <div className={cls.returnsTab}>

      <ReturnItem />
      <ReturnItem />
      <ReturnItem />

      <div className={`${cls.pagination} pagination`}>
        <Pagination count={20} page={pageNumber} onChange={changePage} />
      </div>

      {/* <div className='empty'>
        <img src="/imgs/empty/emptyReturns.png" alt="emptyImage" />
        <h6>You have no returns yet!</h6>
      </div> */}

    </div>
  )
}

export default ReturnsTab;