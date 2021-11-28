import {
  Badge,
  ButtonProps,
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { GrRefresh as ResetIcon } from "react-icons/gr";
import { percent } from "utils";

const StatBadge = chakra(Badge, {
  baseStyle: {
    minW: "60px",
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

const GameControls: FC<Props> = ({ correct, attempts, onResetGame }) => {
  return (
    <HStack align="stretch">
      <HStack spacing={1}>
        {/* <IconButton
          aria-label="Play"
          icon={<Icon as={PlayIcon} boxSize="20px" />}
        />
        <IconButton
          aria-label="Stop"
          icon={<Icon as={StopIcon} boxSize="20px" />}
        /> */}
        <IconButton
          aria-label="Reset"
          onClick={onResetGame}
          icon={<Icon as={ResetIcon} boxSize="20px" />}
        />
      </HStack>
      <HStack align="stretch" spacing={1}>
        <StatBadge colorScheme="green">{correct}</StatBadge>
        <StatBadge colorScheme="red">{attempts - correct}</StatBadge>
        <Flex px={2} alignItems="center">
          <Text fontWeight="bold">{percent(correct, attempts)}%</Text>
        </Flex>
      </HStack>
    </HStack>
  );
};

export default GameControls;
