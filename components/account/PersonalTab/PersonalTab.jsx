import { useTranslation } from 'next-i18next';

import cls from './personalTab.module.scss';

const PersonalTab = () => {
  const { i18n } = useTranslation();

  return (
    <div className={cls.personalTab}>

      <div className={cls.personalTab__accountDetails}>
        
        <h3 className={`${i18n.language} mainTitle`}>Account Details <span></span></h3>

        <div className={cls.field}>

          <label>Display Name</label>

          <input type="text" placeholder='Display Name' />

        </div>

        <div className={cls.field}>

          <label>Display Name</label>

          <input type="text" placeholder='Display Name' />

        </div>

      </div>

      <div className={cls.personalTab__passwordChange}>
        
        <h3 className={`${i18n.language} mainTitle`}>Password Change <span></span></h3>

        <div className={cls.field}>

          <label>Current Password (leave blank to leave unchanged)</label>

          <input type="password" placeholder='Current Password' />

        </div>

        <div className={cls.field}>

          <label>New Password (leave blank to leave unchanged)</label>

          <input type="password" placeholder='New Password' />

        </div>

        <div className={cls.field}>

          <label>Confirm New Password</label>

          <input type="password" placeholder='Confirm New Password' />

        </div>

      </div>

      <button>Save Changes</button>

    </div>
  )
}

export default PersonalTab