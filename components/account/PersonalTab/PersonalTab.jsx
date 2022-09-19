import { useTranslation } from 'next-i18next';

import cls from './personalTab.module.scss';

const PersonalTab = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.personalTab}>

      <div className={cls.personalTab__accountDetails}>
        
        <h3 className={`${i18n.language} mainTitle`}>{t('account.details')} <span></span></h3>

        <div className={cls.field}>

          <label>{t('account.displayName')}</label>

          <input type="text" placeholder={t('account.displayName')} />

        </div>

        <div className={cls.field}>

          <label>{t('account.email')}</label>

          <input type="text" placeholder={t('account.email')} />

        </div>

      </div>

      <div className={cls.personalTab__passwordChange}>
        
        <h3 className={`${i18n.language} mainTitle`}>{t('account.passwordChange')} <span></span></h3>

        <div className={cls.field}>

          <label>{t('account.pass')}</label>

          <input type="password" placeholder={t('account.cPass')} />

        </div>

        <div className={cls.field}>

          <label>{t('account.newPass')}</label>

          <input type="password" placeholder={t('account.nPass')} />

        </div>

        <div className={cls.field}>

          <label>{t('account.confirm')}</label>

          <input type="password" placeholder={t('account.confirm')} />

        </div>

      </div>

      <button>{t('account.save')}</button>

    </div>
  )
}

export default PersonalTab