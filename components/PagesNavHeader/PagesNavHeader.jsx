import { Fragment } from 'react';
import cls from './pagesNavHeader.module.scss';

const PagesNavHeader = ({ steps }) => {
  return (
    <div className={cls.pagesNavHeader}>

      <span>Home</span>
      
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