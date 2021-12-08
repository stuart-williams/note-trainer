/* eslint-disable  @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any */

import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import { useMount } from "react-use";

const Analytics: FC = () => {
  const win = window as any; // @ts-ignore
  const { pathname, search } = useLocation();

  useMount(() => {
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(["js", new Date()]);
    win.dataLayer.push(["config", "G-JDKSFDYP9M"]);
  });

  useEffect(() => {
    win.dataLayer.push(["set", "page", pathname + search]);
    win.dataLayer.push(["send", "pageview"]);
  }, [pathname]);

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JDKSFDYP9M"
      />
    </Helmet>
  );
};

export default Analytics;
