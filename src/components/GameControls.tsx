import {
  Badge,
  ButtonProps,
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  Container,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { GrRefresh as ResetIcon } from "react-icons/gr";
import { percent } from "utils";

const StatBadge = chakra(Badge, {
  baseStyle: {
    minW: "50px",
    fontSize: "xl",
    display: "flex",
    borderRadius: "md",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface Props {
  correct: number;
  attempts: number;
  onResetGame?: ButtonProps["onClick"];
}

const GameControls: FC<Props> = ({ correct, attempts, onResetGame }) => (
  <Container as={HStack} align="stretch" maxW="container.sm">
    <IconButton
      variant="ghost"
      aria-label="Reset"
      onClick={onResetGame}
      icon={<Icon as={ResetIcon} boxSize="20px" />}
    />
    <HStack align="stretch" spacing={1}>
      <StatBadge colorScheme="green" borderWidth="1px" borderColor="green.200">
        {correct}
      </StatBadge>
      <StatBadge colorScheme="red" borderWidth="1px" borderColor="red.200">
        {attempts - correct}
      </StatBadge>
      <Flex px={2} alignItems="center">
        <Text fontWeight="bold">{percent(correct, attempts)}%</Text>
      </Flex>
    </HStack>
  </Container>
);

export default GameControls;
