import { Flex, VStack } from "@chakra-ui/react";
import RotateDevice from "components/RotateDevice";
import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "react-use";
import AppBar from "./AppBar";

interface Props {
  title?: string;
  landscape?: boolean;
}

const Page: FC<Props> = ({ title, landscape, children }) => {
  const location = useLocation();
  const spacing = landscape ? 1 : 2;
  const pageTitle = (title ? title + " - " : "") + "Note Trainer";

  useTitle(pageTitle);

  useEffect(() => {
    window.dataLayer.push({
      event: "virtualPageView",
      pageTitle,
      pageLocation: window.location.href,
    });

    setTimeout(() => {
      // Hide mobile address bar
      window.scrollTo(0, 1);
    }, 0);
  }, [location.pathname]);

  return (
    <>
      {landscape && <RotateDevice />}
      <AppBar title={title} />
      <Flex
        as={VStack}
        pb={spacing}
        mt={spacing}
        flex="1 1 auto"
        align="stretch"
        spacing={spacing}
      >
        {children}
      </Flex>
    </>
  );
};

export default Page;
