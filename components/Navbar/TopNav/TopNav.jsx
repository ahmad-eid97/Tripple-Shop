import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './topNav.module.scss';

const TopNav = () => {
  const { t, i18n } = useTranslation('nav')
  const router = useRouter();

  return (
    <div className={cls.topNav}>
      <Container maxWidth="xxl" className={`${cls.wrapper}`}>
        <div>
          <span>{t('nav.welcome')}</span>
        </div>
        <div className={cls.options}>
          <span><i className="fa-light fa-location-dot"></i> {t('nav.store')}</span>
          <span onClick={() => router.push('/track-order')}><i className="fa-light fa-truck"></i> {t('nav.track')}</span>
          <span><i className="fa-light fa-bag-shopping"></i> {t('nav.shop')}</span>
          <span onClick={() => router.push('/account')}><i className="fa-light fa-user"></i> {t('nav.account')}</span>
        </div>
      </Container>
    </div>
  )
}

export default TopNav