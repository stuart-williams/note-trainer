import { ChakraProvider, LightMode } from "@chakra-ui/react";
import App from "components/App";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { RecoilRoot } from "recoil";
import theme from "theme";

const Analytics: FC = () => (
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
