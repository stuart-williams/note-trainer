import {
  Badge,
  Center,
  chakra,
  Container,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import GameCountdown from "components/GameCountdown";
import { identity } from "lodash";
import React, { FC } from "react";
import { IoPlay as PlayIcon, IoStop as StopIcon } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { gameDurationState } from "state";
import { IStats } from "types";
import { useCountdown } from "utils";

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
  onPlayClick?: () => void;
  onStopClick?: () => void;
  onTimerStart?: () => void;
  onTimerStop?: () => void;
}

const GameControls: FC<Props> = ({
  stats,
  onPlayClick = identity,
  onStopClick = identity,
  onTimerStart = identity,
}) => {
  const countdown = useCountdown();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const duration = useRecoilValue(gameDurationState);

  const handlePlayClick = () => {
    onPlayClick();
    onOpen();
  };

  const handleStopClick = () => {
    countdown.stop();
    onStopClick();
  };

  const handleCountdownStart = () => {
    onClose();
    countdown.start(duration);
    onTimerStart();
  };

  return (
    <>
      <Container as={HStack} align="stretch" maxW="container.sm">
        <IconButton
          aria-label="Play"
          onClick={handlePlayClick}
          isDisabled={countdown.isRunning}
          icon={<Icon as={PlayIcon} boxSize="20px" />}
        />
        <Center px={4} borderRadius="md" boxShadow="inner">
          <Text fontSize="lg" fontFamily="sans-serif">
            {countdown.remaining.formatted}
          </Text>
        </Center>
        <IconButton
          aria-label="Stop"
          onClick={handleStopClick}
          icon={<Icon as={StopIcon} boxSize="20px" />}
        />
        <StatBadge colorScheme="green" borderColor="green.200">
          {stats.correct}
        </StatBadge>
        <StatBadge colorScheme="red" borderColor="red.200">
          {stats.attempts - stats.correct}
        </StatBadge>
      </Container>
      <GameCountdown isOpen={isOpen} onClose={handleCountdownStart} />
    </>
  );
};

export default GameControls;
