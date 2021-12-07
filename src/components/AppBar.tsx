import {
  chakra,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IoArrowBackOutline as BackIcon } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Title = chakra(Text, {
  baseStyle: {
    fontWeight: "bold",
  },
});

const AppBar: FC = (props) => {
  const location = useLocation();

  return (
    <Flex {...props} h="50px" boxShadow="sm" borderBottomWidth="1px" bg="white">
      <Container as={HStack} maxW="container.xl">
        {location.pathname !== "/" && (
          <IconButton
            to="/"
            as={Link}
            variant="ghost"
            aria-label="Back"
            icon={<Icon as={BackIcon} boxSize="20px" />}
          />
        )}
        {location.pathname === "/" && <Title>Note Trainer</Title>}
        {location.pathname === "/name-the-note" && <Title>Name the Note</Title>}
        {location.pathname === "/find-the-note" && <Title>Find the Note</Title>}
        {location.pathname === "/fretboard-reference" && (
          <Title>Fretboard Reference</Title>
        )}
        {location.pathname === "/settings" && <Title>Settings</Title>}
        {location.pathname === "/statistics" && <Title>Statistics</Title>}
      </Container>
    </Flex>
  );
};

export default chakra(AppBar);