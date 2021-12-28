import {
  chakra,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
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
  const iconBtnSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Flex {...props} boxShadow="sm" borderBottomWidth="1px" bg="white">
      <Container
        as={HStack}
        maxW="container.xl"
        h={{ base: "40px", md: "50px" }}
      >
        {location.pathname !== "/" && (
          <IconButton
            to="/"
            as={Link}
            variant="ghost"
            aria-label="Back"
            size={iconBtnSize}
            icon={<Icon as={BackIcon} boxSize="20px" />}
          />
        )}
        {title && <Title>{title}</Title>}
      </Container>
    </Flex>
  );
};

export default chakra(AppBar);
