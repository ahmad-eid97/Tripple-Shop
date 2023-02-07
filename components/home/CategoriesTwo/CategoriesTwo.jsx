/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './categoriesTwo.module.scss';

const Categories = () => {
  const { t, i18n } = useTranslation('common')

  const router = useRouter()

  return (
    <div className={cls.categories}>

      <Container maxWidth="xxl">
        <div className={`${cls.categories__head}`}>

          <h2>Our Top Categories</h2>

        </div>

        <div className={cls.categories__allCategories}>

          <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={4}>

              <div className={cls.singleCategory}>

                <h5>Apple Accessories</h5>

                <div className={cls.wrapper}>
                  <p>For iPhone 14 Plus Candy Color Wave TPU Clear PC Phone Case(Yellow)</p>

                  <div className={cls.subCats}>

                    <div className={`${cls.subCatsList} ${cls[i18n.language]}`}>
                      <ul>
                        <li>Apple Watch</li>
                        <li>Iphone 14</li>
                        <li>Iphone 14 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                        <li>Iphone 14 Plus</li>
                        <li>Iphone 13 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                      </ul>
                    </div>

                    <div className={cls.img}>
                      <img src="/imgs/products/headphone.png" alt="productImage" className={cls.mainImage} />
                      <img src="/imgs/products/play.png" alt="productImage" className={cls.secondImage} />
                      <h5><p>Only: </p> <span>$1200</span></h5>
                    </div>

                  </div>
                </div>

              </div>

            </Grid>

            <Grid item xs={12} md={6} lg={4}>

              <div className={cls.singleCategory}>

                <h5>Apple Accessories</h5>

                <div className={cls.wrapper}>
                  <p>For iPhone 14 Plus Candy Color Wave TPU Clear PC Phone Case(Yellow)</p>

                  <div className={cls.subCats}>

                    <div className={`${cls.subCatsList} ${cls[i18n.language]}`}>
                      <ul>
                        <li>Apple Watch</li>
                        <li>Iphone 14</li>
                        <li>Iphone 14 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                        <li>Iphone 14 Plus</li>
                        <li>Iphone 13 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                      </ul>
                    </div>

                    <div className={cls.img}>
                      <img src="/imgs/products/headphone.png" alt="productImage" className={cls.mainImage} />
                      <img src="/imgs/products/play.png" alt="productImage" className={cls.secondImage} />
                      <h5><p>Only: </p> <span>$1200</span></h5>
                    </div>

                  </div>
                </div>

              </div>

            </Grid>

            <Grid item xs={12} md={6} lg={4}>

              <div className={cls.singleCategory}>

                <h5>Apple Accessories</h5>

                <div className={cls.wrapper}>
                  <p>For iPhone 14 Plus Candy Color Wave TPU Clear PC Phone Case(Yellow)</p>

                  <div className={cls.subCats}>

                    <div className={`${cls.subCatsList} ${cls[i18n.language]}`}>
                      <ul>
                        <li>Apple Watch</li>
                        <li>Iphone 14</li>
                        <li>Iphone 14 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                        <li>Iphone 14 Plus</li>
                        <li>Iphone 13 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                      </ul>
                    </div>

                    <div className={cls.img}>
                      <img src="/imgs/products/headphone.png" alt="productImage" className={cls.mainImage} />
                      <img src="/imgs/products/play.png" alt="productImage" className={cls.secondImage} />
                      <h5><p>Only: </p> <span>$1200</span></h5>
                    </div>

                  </div>
                </div>

              </div>

            </Grid>

            <Grid item xs={12} md={6} lg={4}>

              <div className={cls.singleCategory}>

                <h5>Apple Accessories</h5>

                <div className={cls.wrapper}>
                  <p>For iPhone 14 Plus Candy Color Wave TPU Clear PC Phone Case(Yellow)</p>

                  <div className={cls.subCats}>

                    <div className={`${cls.subCatsList} ${cls[i18n.language]}`}>
                      <ul>
                        <li>Apple Watch</li>
                        <li>Iphone 14</li>
                        <li>Iphone 14 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                        <li>Iphone 14 Plus</li>
                        <li>Iphone 13 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                      </ul>
                    </div>

                    <div className={cls.img}>
                      <img src="/imgs/products/headphone.png" alt="productImage" className={cls.mainImage} />
                      <img src="/imgs/products/play.png" alt="productImage" className={cls.secondImage} />
                      <h5><p>Only: </p> <span>$1200</span></h5>
                    </div>

                  </div>
                </div>

              </div>

            </Grid>

            <Grid item xs={12} md={6} lg={4}>

              <div className={cls.singleCategory}>

                <h5>Apple Accessories</h5>

                <div className={cls.wrapper}>
                  <p>For iPhone 14 Plus Candy Color Wave TPU Clear PC Phone Case(Yellow)</p>

                  <div className={cls.subCats}>

                    <div className={`${cls.subCatsList} ${cls[i18n.language]}`}>
                      <ul>
                        <li>Apple Watch</li>
                        <li>Iphone 14</li>
                        <li>Iphone 14 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                        <li>Iphone 14 Plus</li>
                        <li>Iphone 13 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                      </ul>
                    </div>

                    <div className={cls.img}>
                      <img src="/imgs/products/headphone.png" alt="productImage" className={cls.mainImage} />
                      <img src="/imgs/products/play.png" alt="productImage" className={cls.secondImage} />
                      <h5><p>Only: </p> <span>$1200</span></h5>
                    </div>

                  </div>
                </div>

              </div>

            </Grid>

            <Grid item xs={12} md={6} lg={4}>

              <div className={cls.singleCategory}>

                <h5>Apple Accessories</h5>

                <div className={cls.wrapper}>
                  <p>For iPhone 14 Plus Candy Color Wave TPU Clear PC Phone Case(Yellow)</p>

                  <div className={cls.subCats}>

                    <div className={`${cls.subCatsList} ${cls[i18n.language]}`}>
                      <ul>
                        <li>Apple Watch</li>
                        <li>Iphone 14</li>
                        <li>Iphone 14 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                        <li>Iphone 14 Plus</li>
                        <li>Iphone 13 Pro</li>
                        <li>Iphone 14 Pro Max</li>
                      </ul>
                    </div>

                    <div className={cls.img}>
                      <img src="/imgs/products/headphone.png" alt="productImage" className={cls.mainImage} />
                      <img src="/imgs/products/play.png" alt="productImage" className={cls.secondImage} />
                      <h5><p>Only: </p> <span>$1200</span></h5>
                    </div>

                  </div>
                </div>

              </div>

            </Grid>

          </Grid>

        </div>
      </Container>

    </div>
  )
}

export default Categories