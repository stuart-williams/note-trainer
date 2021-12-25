import {
  Badge,
  Center,
  chakra,
  Container,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IoPlay as PlayIcon, IoStop as StopIcon } from "react-icons/io5";
import { IGameTimer, IStats } from "types";

const StatBadge = chakra(Badge, {
  baseStyle: {
    minW: "50px",
    fontSize: "xl",
    display: "flex",
    borderWidth: "1px",
    borderRadius: "md",
    boxShadow: "inner",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface Props {
  stats: IStats;
  timer: IGameTimer;
  onPlayClick?: () => void;
  onStopClick?: () => void;
}

const GameControls: FC<Props> = ({
  stats,
  timer,
  onPlayClick,
  onStopClick,
}) => (
  <Container as={HStack} align="stretch" maxW="container.sm">
    <IconButton
      aria-label="Play"
      onClick={onPlayClick}
      isDisabled={timer.isRunning}
      icon={<Icon as={PlayIcon} boxSize="20px" />}
    />
    <Center px={4} borderRadius="md" boxShadow="inner">
      <Text fontSize="lg" fontFamily="sans-serif">
        {timer.display}
      </Text>
    </Center>
    <IconButton
      aria-label="Stop"
      onClick={onStopClick}
      icon={<Icon as={StopIcon} boxSize="20px" />}
    />
    <StatBadge colorScheme="green" borderColor="green.200">
      {stats.correct}
    </StatBadge>
    <StatBadge colorScheme="red" borderColor="red.200">
      {stats.attempts - stats.correct}
    </StatBadge>
  </Container>
);

export default GameControls;
