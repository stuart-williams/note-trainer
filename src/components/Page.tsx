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
  const pageTitle = (title ? title + " - " : "") + "Note Trainer";

  useTitle(pageTitle);

  useEffect(() => {
    window.dataLayer.push({
      event: "virtualPageView",
      pageTitle,
      pageLocation: window.location.href,
    });
  }, [location.pathname]);

  return (
    <>
      {landscape && <RotateDevice />}
      <AppBar title={title} />
      <Flex mt={2} as={VStack} flex="1 1 auto" align="stretch" pb={2}>
        {children}
      </Flex>
    </>
  );
};

export default Page;
