import { Flex, VStack } from "@chakra-ui/react";
import AppBar from "components/AppBar";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { usePageView } from "utils";

interface Props {
  title?: string;
}

const Layout: FC<Props> = ({ title, children }) => {
  usePageView();

  return (
    <>
      <Helmet>
        <title>Note Trainer{title ? ` | ${title}` : ""}</title>
      </Helmet>
      <AppBar mb={4} title={title} />
      <Flex as={VStack} flex="1 1 auto" align="stretch" pb={2}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;
