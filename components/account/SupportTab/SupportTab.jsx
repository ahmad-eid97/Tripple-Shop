/* eslint-disable @next/next/no-img-element */
import cls from './supportTab.module.scss';

const SupportTab = () => {
  return (
    <div className={cls.supportTab}>
      <div className='empty'>
        <img src="/imgs/empty/support.png" alt="emptyImage" />
        <h6>Support section is not ready yet!</h6>
      </div>
    </div>
  )
}

export default SupportTab