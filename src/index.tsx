import { ChakraProvider } from "@chakra-ui/react";
import App from "components/App";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
