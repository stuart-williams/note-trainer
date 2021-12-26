import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
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
  const countdown = useCountdown();
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      countdown.start(5000, onClose);
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
        <AlertDialogContent mx={4}>
          <AlertDialogHeader textAlign="center">Get Ready!</AlertDialogHeader>
          <AlertDialogBody as={VStack} pb={4}>
            <Text fontSize="lg">The game will start in...</Text>
            <Heading>{countdown.remaining.seconds}</Heading>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default GameCountdown;
