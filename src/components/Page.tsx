import { Flex, VStack } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "./AppBar";

interface Props {
  title?: string;
}

const Page: FC<Props> = ({ title, children }) => {
  const location = useLocation();
  const pageTitle = (title ? title + " - " : "") + "Note Trainer";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    window.dataLayer.push({
      event: "virtualPageView",
      pageTitle,
      pageLocation: window.location.href,
    });
  }, [location.pathname]);

  return (
    <>
      <AppBar mb={2} title={title} />
      <Flex as={VStack} flex="1 1 auto" align="stretch" pb={2}>
        {children}
      </Flex>
    </>
  );
};

export default Page;
