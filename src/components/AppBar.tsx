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

interface Props {
  title?: string;
}

const AppBar: FC<Props> = ({ title = "Note Trainer", ...props }) => {
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
        {title && <Title>{title}</Title>}
      </Container>
    </Flex>
  );
};

export default chakra(AppBar);
