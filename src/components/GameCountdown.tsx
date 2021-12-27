import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { identity } from "lodash";
import React, { FC, useEffect, useRef } from "react";
import { useCountdown } from "utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GameCountdown: FC<Props> = ({ isOpen, onClose }) => {
  const countdown = useCountdown({ onExpire: onClose });
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      countdown.start(3000);
    }
  }, [isOpen]);

  return (
    <AlertDialog
      isCentered
      isOpen={isOpen}
      onClose={identity}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent w="auto">
          <AlertDialogBody as={VStack} py={4} px={8}>
            <Heading size="4xl">{countdown.remaining.seconds}</Heading>
            <Text fontSize="xl">GET READY</Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default GameCountdown;
