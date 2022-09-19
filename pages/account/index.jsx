import { useState } from "react";

import {
  AccountSidebar,
  PagesNavHeader,
  PersonalTab,
  OrdersTab,
  ReturnsTab,
  SupportTab,
  AddressesTab,
  AccountMobSidebar,
} from "../../components";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";

import cls from "./account.module.scss";

const Account = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [openMobSidebar, setOpenMobSidebar] = useState(false);
  const { t } = useTranslation('common');

  const renderView = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalTab />;
      case "orders":
        return <OrdersTab />;
      case "returns":
        return <ReturnsTab />;
      case "support":
        return <SupportTab />;
      case "addresses":
        return <AddressesTab />;
    }
  };

  return (
    <div className={cls.account}>
      <Container maxWidth="xxl">
        <PagesNavHeader steps={[`${t('account.account')}`]} />

        <div className={cls.account__wrapper}>
          <div className={cls.mobileNav}>
            <i
              className="fa-regular fa-bars-sort"
              onClick={() => setOpenMobSidebar(true)}
            ></i>
          </div>

          <Grid container spacing={3}>
            <Grid item md={3} lg={3} className={cls.sidebar}>
              <AccountSidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </Grid>

            <Grid item xs={12} lg={9}>
              {renderView()}
            </Grid>
          </Grid>
        </div>
      </Container>

      <AccountMobSidebar
        className={openMobSidebar ? cls.show : cls.hide}
        isOpen={openMobSidebar}
        closeMobileMenu={setOpenMobSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
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

export default Account;
