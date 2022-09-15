import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import cls from './topNav.module.scss';

const TopNav = () => {
  const router = useRouter();

  return (
    <div className={cls.topNav}>
      <Container maxWidth="xxl" className={`${cls.wrapper}`}>
        <div>
          <span>Welcome to Grids E-commerce Store</span>
        </div>
        <div className={cls.options}>
          <span><i className="fa-light fa-location-dot"></i> Store Locator</span>
          <span onClick={() => router.push('/track-order')}><i className="fa-light fa-truck"></i> Track Your Order</span>
          <span><i className="fa-light fa-bag-shopping"></i> Shop</span>
          <span onClick={() => router.push('/account')}><i className="fa-light fa-user"></i> Account</span>
        </div>
      </Container>
    </div>
  )
}

export default TopNav