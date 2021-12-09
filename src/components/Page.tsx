import { Flex, VStack } from "@chakra-ui/react";
import AppBar from "components/AppBar";
import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  title?: string;
}

const Page: FC<Props> = ({ title, children }) => {
  const location = useLocation();
  const pageTitle = `Note Trainer${title ? ` | ${title}` : ""}`;

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
      <AppBar mb={4} title={title} />
      <Flex as={VStack} flex="1 1 auto" align="stretch" pb={2}>
        {children}
      </Flex>
    </>
  );
};

export default Page;
