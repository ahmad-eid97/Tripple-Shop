import { useState } from 'react';

import Review from './Review/Review';

import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import { useTranslation } from 'next-i18next';

import cls from './reviewsTab.module.scss';

const ReviewsTab = () => {
  const [rate, setRate] = useState(0)
  const { t } = useTranslation('common');

  return (
    <div className={cls.reviewsTab}>

      <Grid container spacing={3}>

        <Grid item xs={12} md={5}>

          <div className={cls.reviewsTab__rating}>

            <h3>{t('product.based')} 3 {t('product.reviews')}</h3>

            <div className={cls.overAll}>
              <p>4.2</p>
              <span>{t('product.overall')}</span>
            </div>

            <div className={cls.reviewsTab__rating_stars}>

              <div className={cls.star}>
                
                <Rating name="read-only" value={5} readOnly />

                <div>
                  <p className={cls.line}><span></span></p>
                  <p>5</p>
                </div>

              </div>

              <div className={cls.star}>
                
                <Rating name="read-only" value={4} readOnly />

                <div>
                  <p className={cls.line}><span></span></p>
                  <p>4</p>
                </div>

              </div>

              <div className={cls.star}>
                
                <Rating name="read-only" value={3} readOnly />

                <div>
                  <p className={cls.line}><span></span></p>
                  <p>3</p>
                </div>

              </div>

              <div className={cls.star}>
                
                <Rating name="read-only" value={2} readOnly />

                <div>
                  <p className={cls.line}><span></span></p>
                  <p>2</p>
                </div>

              </div>

              <div className={cls.star}>
                
                <Rating name="read-only" value={1} readOnly />

                <div>
                  <p className={cls.line}><span></span></p>
                  <p>1</p>
                </div>

              </div>

            </div>

          </div>

        </Grid>

        <Grid item xs={12} md={7}>

          <div className={cls.reviewsTab__addReview}>

            <h3>{t('product.addReview')}</h3>

            <div className={cls.reviewsTab__addReview_field}>

              <label className={cls.label}>{t('product.rating')}</label>
                
              <Rating
                value={rate}
                onChange={(event, newValue) => {
                  setRate(newValue);
                }}
              />

            </div>

            <div className={cls.reviewsTab__addReview_field}>

              <label className={cls.label}>{t('product.review')}</label>
                
              <textarea placeholder={t('product.review')}></textarea>

            </div>

            <div className={cls.reviewsTab__addReview_field}>

              <label className={cls.label}>{t('product.name')}*</label>
                
              <input type="text" placeholder={t('product.name')} />

            </div>

            <div className={cls.reviewsTab__addReview_field}>

              <label className={cls.label}>{t('product.email')}*</label>
                
              <input type="text" placeholder={t('product.email')} />

            </div>

            <div className={cls.addBtn}>
              <button>{t('product.add')}</button>
            </div>

          </div>

        </Grid>

      </Grid>

      <div className={cls.reviewsTab__reviews}>

        <div className={cls.reviewsTab__reviews_review}>
          <Review />
        </div>

        <div className={cls.reviewsTab__reviews_review}>
          <Review />
        </div>

        <div className={cls.reviewsTab__reviews_review}>
          <Review />
        </div>

        <div className={cls.reviewsTab__reviews_review}>
          <Review />
        </div>

      </div>

    </div>
  )
}

export default ReviewsTab