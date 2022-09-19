/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import cls from './accountSidebar.module.scss';

const AccountSidebar = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation('common');

  return (
    <div className={cls.accountSidebar}>

      <div className={cls.accountSidebar__user}>

        <img src="/imgs/account/me.jpg" alt="accountImage" />

        <div>
          <h5>Ahmad eid</h5>
          <span>Customer</span>
        </div>

      </div>

      <div className={cls.accountSidebar__list}>

        <ul>

          <li className={activeTab === 'personal' ? cls.active : ''} onClick={() => setActiveTab('personal')}><i className="fa-light fa-user"></i> {t('account.personal')}</li>

          <li className={activeTab === 'addresses' ? cls.active : ''} onClick={() => setActiveTab('addresses')}><i className="fa-light fa-location-dot"></i> {t('account.addresses')}</li>

          <li className={activeTab === 'orders' ? cls.active : ''} onClick={() => setActiveTab('orders')}><i className="fa-regular fa-box-circle-check"></i> {t('account.orders')}</li>

          <li className={activeTab === 'returns' ? cls.active : ''} onClick={() => setActiveTab('returns')}><i className="fa-regular fa-rotate-left"></i> {t('account.returns')}</li>

          <li className={activeTab === 'support' ? cls.active : ''} onClick={() => setActiveTab('support')}><i className="fa-light fa-headset"></i> {t('account.support')}</li>

          <li><i className="fa-regular fa-right-from-bracket"></i> {t('account.logout')}</li>

        </ul>

      </div>

    </div>
  )
}

export default AccountSidebar