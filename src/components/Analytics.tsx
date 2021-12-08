/* eslint-disable  @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any, prefer-rest-params */

import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";

const Analytics: FC = () => {
  const win = window as any; // @ts-ignore
  const { pathname } = useLocation();

  useEffect(() => {
    if (win.gtag) {
      win.gtag({ event: "page_view", page: pathname });
    }
  }, [pathname]);

  return (
    <Helmet>
      {process.env.NODE_ENV === "production" && (
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JDKSFDYP9M"
        />
      )}
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-JDKSFDYP9M");
    `}</script>
    </Helmet>
  );
};

export default Analytics;
