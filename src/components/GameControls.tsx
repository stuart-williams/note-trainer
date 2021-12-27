import {
  Badge,
  Button,
  Center,
  chakra,
  Container,
  HStack,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import GameCountdown from "components/GameCountdown";
import GameOver from "components/GameOver";
import { gameDurations } from "config";
import { identity } from "lodash";
import React, { FC } from "react";
import { IoPlay as PlayIcon, IoStop as StopIcon } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { gameDurationState } from "state";
import { IGameDuration, IStats } from "types";
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
  onTimerStop = identity,
}) => {
  const [duration, setDuration] = useRecoilState(gameDurationState);

  const {
    isOpen: isCountdownOpen,
    onOpen: openCountdown,
    onClose: closeCountdown,
  } = useDisclosure();

  const {
    isOpen: isGameOverOpen,
    onOpen: openGameOver,
    onClose: closeGameOver,
  } = useDisclosure();

  const countdown = useCountdown({
    onExpire: () => {
      openGameOver();
      onTimerStop();
    },
  });

  const handlePlayClick = () => {
    onPlayClick();
    closeGameOver();
    openCountdown();
  };

  const handleStopClick = () => {
    countdown.reset();
    onStopClick();
  };

  const handleCountdownStart = () => {
    closeCountdown();
    countdown.start(duration);
    onTimerStart();
  };

  return (
    <>
      <GameCountdown isOpen={isCountdownOpen} onClose={handleCountdownStart} />
      <GameOver
        isOpen={isGameOverOpen}
        onClose={closeGameOver}
        onPlayAgainClick={handlePlayClick}
      >
        You identified {stats.correct} notes correctly
      </GameOver>
      <Container
        as={HStack}
        align="stretch"
        maxW="container.sm"
        justifyContent="center"
      >
        <RadioGroup
          as={HStack}
          value={duration}
          onChange={(value) => setDuration(Number(value) as IGameDuration)}
        >
          {gameDurations.map(({ label, value }) => (
            <Radio key={value} value={value}>
              {label}
            </Radio>
          ))}
        </RadioGroup>
        <IconButton
          aria-label="Play"
          onClick={handlePlayClick}
          isDisabled={countdown.isRunning}
          icon={<Icon as={PlayIcon} boxSize="20px" />}
        />
        <Center w="80px" px={4} borderRadius="md" boxShadow="inner">
          <Text fontSize="lg">{countdown.remaining.formatted}</Text>
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
        <Button as={Link} to="/" colorScheme="red" variant="outline">
          Exit
        </Button>
      </Container>
    </>
  );
};

export default GameControls;
