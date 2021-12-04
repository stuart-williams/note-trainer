import { ChakraProvider, LightMode } from "@chakra-ui/react";
import App from "components/App";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import theme from "theme";

ReactDOM.render(
  <React.StrictMode>
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
