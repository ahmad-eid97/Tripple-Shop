import { useTranslation } from 'next-i18next';

import cls from './loader.module.scss';

const Loader = () => {
  const { t } = useTranslation('common')

  return (
    <div className={cls.wrapper}>
      <div className={cls.dominoes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h5>{t('loading')}</h5>
    </div>
  )
}

export default Loader