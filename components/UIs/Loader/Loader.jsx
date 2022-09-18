import cls from './loader.module.scss';

const Loader = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.dominoes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h5>Loading...</h5>
    </div>
  )
}

export default Loader