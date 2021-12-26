import { Center, chakra, Heading, Text, VStack } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import { useCountdown } from "utils";

const Mask = chakra(Center, {
  baseStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bg: "white",
    zIndex: "modal",
    position: "absolute",
  },
});

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GameCountdown: FC<Props> = ({ isOpen, onClose }) => {
  const countdown = useCountdown();

  useEffect(() => {
    if (isOpen) {
      countdown.start(3000, onClose);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Mask as={VStack}>
      <Heading>Get Ready!</Heading>
      <Text fontSize="lg">
        The game with start in... {countdown.remaining.seconds || 3}
      </Text>
    </Mask>
  );
};

export default GameCountdown;
