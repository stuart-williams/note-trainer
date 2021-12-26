import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Heading,
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
      countdown.start(4000, onClose);
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
          <AlertDialogBody pb={6}>
            <Heading size="2xl">
              {countdown.remaining.seconds - 1 || "GO"}
            </Heading>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default GameCountdown;
