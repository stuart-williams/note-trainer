import { ChakraProvider, LightMode } from "@chakra-ui/react";
import App from "components/App";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { useMount } from "react-use";
import { RecoilRoot } from "recoil";
import theme from "theme";

const Analytics: FC = () => {
  useMount(() => {
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    win.gtag = (...args: (string | number)[]) => win.dataLayer.push(args);
    win.gtag("js", new Date());
    win.gtag("config", "G-JDKSFDYP9M");
  });

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

ReactDOM.render(
  <React.StrictMode>
    <Analytics />
    <ChakraProvider theme={theme}>
      <LightMode>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </LightMode>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
