import Rating from '@mui/material/Rating';

import cls from './review.module.scss';

const Review = () => {
  return (
    <div className={cls.review}>

      <Rating name="read-only" value={4} readOnly />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum eaque enim aliquid modi quisquam quasi, nisi a perspiciatis adipisci hic doloribus magnam unde harum! Minus ut exercitationem quaerat repudiandae.</p>

      <div className={cls.review__user}>

        <p>ahmad eid</p>

        <span>- March 25, 2016</span>

      </div>

    </div>
  )
}

export default Review