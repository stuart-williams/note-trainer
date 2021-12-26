import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text,
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
      countdown.start(3000, onClose);
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
        <AlertDialogContent mx={4} textAlign="center">
          <AlertDialogHeader>Get Ready!</AlertDialogHeader>
          <AlertDialogBody pb={4}>
            <Text fontSize="lg">
              The game will start in... {countdown.remaining.seconds || ""}
            </Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default GameCountdown;
