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
import { identity, padStart } from "lodash";
import React, { FC } from "react";
import { IoPlay as PlayIcon, IoStop as StopIcon } from "react-icons/io5";
import { useInterval, useUpdateEffect } from "react-use";
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
  onPlay?: () => void;
  onStop?: () => void;
}

const GameControls: FC<Props> = ({
  correct,
  attempts,
  onPlay = identity,
  onStop = identity,
}) => {
  const remaining = useRecoilValue(gameRemainingState);
  const [tick, nextTick] = useRecoilState(gameTickProxySelector);
  const stopGame = useResetRecoilState(gameTickProxySelector);
  const isPlaying = tick > 0 && remaining > 0;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const handlePlayClick = () => {
    nextTick(1);
    onPlay();
  };

  useUpdateEffect(() => {
    if (!isPlaying) {
      onStop();
    }
  }, [isPlaying]);

  useInterval(() => nextTick(tick + 1), remaining > 0 ? 1000 : null);

  return (
    <Container as={HStack} align="stretch" maxW="container.sm">
      <IconButton
        aria-label="Play"
        isDisabled={isPlaying}
        onClick={handlePlayClick}
        icon={<Icon as={PlayIcon} boxSize="20px" />}
      />
      <Center w="54px">
        <Text fontWeight="bold">
          {padStart(String(minutes), 2, "0")}:
          {padStart(String(seconds), 2, "0")}
        </Text>
      </Center>
      <IconButton
        aria-label="Stop"
        onClick={stopGame}
        icon={<Icon as={StopIcon} boxSize="20px" />}
      />
      <Divider orientation="vertical" />
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
