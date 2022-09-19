/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import PagesNavHeader from "./../../components/PagesNavHeader/PagesNavHeader";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import { useTranslation } from "next-i18next";

import cls from "./trackOrder.module.scss";

const TrackOrder = () => {
  const [showOrderTrack, setShowOrderTrack] = useState(false);
  const { t } = useTranslation('common');

  return (
    <div className={cls.trackOrder}>
      <Container maxWidth="xxl">
        <PagesNavHeader steps={[`${t('track.track')}`]} />

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={cls.truckImage}>
              <img src="/imgs/trackOrder/truck.png" alt="truckImage" />
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <div className={cls.trackBox}>
              <h3>{t('track.check')}</h3>

              <input type="text" placeholder={t('track.typeOrderId')} />

              <button onClick={() => setShowOrderTrack(!showOrderTrack)}>{t('track.track')}</button>
            </div>
          </Grid>
        </Grid>

        {showOrderTrack && (
          <>
            <div className={cls.trackOrder__steps}>
              <div className={cls.step}>
                <p className={`${cls.circle} ${cls.active}`}>
                  <i className="fa-duotone fa-alarm-clock"></i>
                </p>

                <h4>{t('track.processing')}</h4>
              </div>

              <div className={cls.step}>
                <p className={cls.circle}>
                  <i className="fa-duotone fa-box-open-full"></i>
                </p>

                <h4>{t('track.shipped')}</h4>
              </div>

              <div className={cls.step}>
                <p className={cls.circle}>
                  <i className="fa-duotone fa-truck-container"></i>
                </p>

                <h4>{t('track.onWay')}</h4>
              </div>

              <div className={cls.step}>
                <p className={cls.circle}>
                  <i className="fa-duotone fa-box-check"></i>
                </p>

                <h4>{t('track.delivered')}</h4>
              </div>
            </div>

            <div className={cls.orderDetails}>
              <div className={cls.orderItem}>
                <div className={cls.orderItem__head}>
                  <p>
                  {t('track.orderId')} <span>1213424</span>
                  </p>

                  <p>
                  {t('track.orderStatus')}: <span>Delivered</span>
                  </p>
                </div>

                <div className={cls.orderItem__order}>
                  <div className={cls.product}>
                    <img src="/imgs/products/laptop.png" alt="productImage" />

                    <div>
                      <h6>
                        Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB
                        RAM, 1TB HDD
                      </h6>

                      <p>
                      {t('track.price')}: <span>$2000</span>
                      </p>
                      <p>
                      {t('track.quantity')}: <span>2</span>
                      </p>

                      <button>{t('track.view')}</button>
                    </div>
                  </div>

                  <div className={cls.cancel}>
                    <button>{t('track.cancel')}</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={cls.orderTotal}>
              <h4>{t('track.orderTotals')}</h4>

              <div>
                <p>{t('track.amount')}: </p>
                <span>$3000</span>
              </div>

              <div>
                <p>{t('track.shipping')}: </p>
                <span>$10</span>
              </div>

              <div>
                <p>{t('track.to')}: </p>
                <span>Sohag, Egypt</span>
              </div>

              <div>
                <p>{t('track.total')}: </p>
                <span>$3010</span>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale, resolvedUrl }) => {
      const languageRedirection = langRedirection(req, locale);
      const routerRedirection = routeRedirection(req, resolvedUrl);

      if (languageRedirection) return languageRedirection;
      if (routerRedirection) return routerRedirection;

      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
        },
      };
    }
);

export default TrackOrder;
