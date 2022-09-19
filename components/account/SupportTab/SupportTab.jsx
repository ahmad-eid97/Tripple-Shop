/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import cls from './supportTab.module.scss';

const SupportTab = () => {
  const { t } = useTranslation('common')

  return (
    <div className={cls.supportTab}>
      <div className='empty'>
        <img src="/imgs/empty/support.png" alt="emptyImage" />
        <h6>{t('account.supportAlert')}</h6>
      </div>
    </div>
  )
}

export default SupportTab