import { Fragment } from 'react';

import { useTranslation } from 'next-i18next';

import cls from './pagesNavHeader.module.scss';

const PagesNavHeader = ({ steps }) => {
  const { t } = useTranslation('nav')

  return (
    <div className={cls.pagesNavHeader}>

      <span>{t('nav.home')}</span>
      
      {steps.map((step, idx) => (

        <Fragment key={idx}>

          <p>	&gt; </p>

          <span>{step}</span>

        </Fragment>

      ))}

    </div>
  )
}

export default PagesNavHeader