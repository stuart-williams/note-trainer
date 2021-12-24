import {
  Badge,
  Center,
  chakra,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IoPlay as PlayIcon, IoStop as StopIcon } from "react-icons/io5";
import { IGameTimer, IStats } from "types";
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
      isDisabled={timer.remaining > 0}
      icon={<Icon as={PlayIcon} boxSize="20px" />}
    />
    <Center w="54px">
      <Text fontWeight="bold">{timer.display}</Text>
    </Center>
    <IconButton
      aria-label="Stop"
      onClick={onStopClick}
      isDisabled={!timer.remaining}
      icon={<Icon as={StopIcon} boxSize="20px" />}
    />
    <Divider orientation="vertical" />
    <StatBadge colorScheme="green" borderColor="green.200">
      {stats.correct}
    </StatBadge>
    <StatBadge colorScheme="red" borderColor="red.200">
      {stats.attempts - stats.correct}
    </StatBadge>
    <Flex p={2} alignItems="center">
      <Text fontSize="lg" fontWeight="bold">
        {percent(stats.correct, stats.attempts)}%
      </Text>
    </Flex>
  </Container>
);

export default GameControls;
