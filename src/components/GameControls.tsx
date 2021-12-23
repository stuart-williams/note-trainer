import {
  Badge,
  ButtonProps,
  chakra,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { FC } from "react";
import {
  IoPlay as PlayIcon,
  IoReload as ResetIcon,
  IoStop as StopIcon,
} from "react-icons/io5";
import { useInterval } from "react-use";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { gameRemainingState, gameTickProxySelector } from "state";
import { percent } from "utils";

const StatBadge = chakra(Badge, {
  baseStyle: {
    minW: "50px",
    fontSize: "xl",
    display: "flex",
    borderWidth: "1px",
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
  const remaining = useRecoilValue(gameRemainingState);
  const [tick, nextTick] = useRecoilState(gameTickProxySelector);
  const stopGame = useResetRecoilState(gameTickProxySelector);
  const startGame = () => nextTick(1);

  useInterval(() => nextTick(tick + 1), remaining > 0 ? 1000 : null);

  return (
    <Container as={HStack} align="stretch" maxW="container.sm">
      <Tooltip hasArrow label="Play" placement="top" openDelay={500}>
        <IconButton
          aria-label="Play"
          onClick={startGame}
          icon={<Icon as={PlayIcon} boxSize="20px" />}
        />
      </Tooltip>
      <Flex p={2} alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          {remaining}
        </Text>
      </Flex>
      <Tooltip hasArrow label="Stop" placement="top" openDelay={500}>
        <IconButton
          aria-label="Stop"
          onClick={stopGame}
          icon={<Icon as={StopIcon} boxSize="20px" />}
        />
      </Tooltip>
      <Divider orientation="vertical" />
      <Tooltip hasArrow label="Reset" placement="top" openDelay={500}>
        <IconButton
          aria-label="Reset"
          onClick={onResetGame}
          icon={<Icon as={ResetIcon} boxSize="20px" />}
        />
      </Tooltip>
      <StatBadge colorScheme="green" borderColor="green.200">
        {correct}
      </StatBadge>
      <StatBadge colorScheme="red" borderColor="red.200">
        {attempts - correct}
      </StatBadge>
      <Flex p={2} alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          {percent(correct, attempts)}%
        </Text>
      </Flex>
    </Container>
  );
};

export default GameControls;
