/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import PagesNavHeader from "./../../components/PagesNavHeader/PagesNavHeader";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import cls from "./trackOrder.module.scss";

const TrackOrder = () => {
  const [showOrderTrack, setShowOrderTrack] = useState(false);

  return (
    <div className={cls.trackOrder}>
      <Container maxWidth="xxl">
        <PagesNavHeader steps={["Track Order"]} />

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={cls.truckImage}>
              <img src="/imgs/trackOrder/truck.png" alt="truckImage" />
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <div className={cls.trackBox}>
              <h3>Check Your Order Status</h3>

              <input type="text" placeholder="Type Your Order ID" />

              <button onClick={() => setShowOrderTrack(!showOrderTrack)}>Track Order</button>
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

                <h4>Processing</h4>
              </div>

              <div className={cls.step}>
                <p className={cls.circle}>
                  <i className="fa-duotone fa-box-open-full"></i>
                </p>

                <h4>Shipped</h4>
              </div>

              <div className={cls.step}>
                <p className={cls.circle}>
                  <i className="fa-duotone fa-truck-container"></i>
                </p>

                <h4>On The Way</h4>
              </div>

              <div className={cls.step}>
                <p className={cls.circle}>
                  <i className="fa-duotone fa-box-check"></i>
                </p>

                <h4>Delivered</h4>
              </div>
            </div>

            <div className={cls.orderDetails}>
              <div className={cls.orderItem}>
                <div className={cls.orderItem__head}>
                  <p>
                    Order Id: <span>1213424</span>
                  </p>

                  <p>
                    Order Status: <span>Delivered</span>
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
                        Price: <span>$2000</span>
                      </p>
                      <p>
                        Quantity: <span>2</span>
                      </p>

                      <button>View Details</button>
                    </div>
                  </div>

                  <div className={cls.cancel}>
                    <button>Cancel Order</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={cls.orderTotal}>
              <h4>Order Totals</h4>

              <div>
                <p>Amount: </p>
                <span>$3000</span>
              </div>

              <div>
                <p>Shipping: </p>
                <span>$10</span>
              </div>

              <div>
                <p>Shipping To: </p>
                <span>Sohag, Egypt</span>
              </div>

              <div>
                <p>Total: </p>
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
