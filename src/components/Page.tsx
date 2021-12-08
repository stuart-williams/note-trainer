import { Flex, VStack } from "@chakra-ui/react";
import AppBar from "components/AppBar";
import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  title?: string;
}

const Page: FC<Props> = ({ title: titleProp, children }) => {
  const location = useLocation();
  const title = `Note Trainer${titleProp ? ` | ${titleProp}` : ""}`;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    window.dataLayer.push({
      event: "virtualPageView",
      pageTitle: title,
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
