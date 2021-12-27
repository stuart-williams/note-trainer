import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React, { FC, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPlayAgainClick: () => void;
}

const GameOver: FC<Props> = ({
  children,
  isOpen,
  onClose,
  onPlayAgainClick,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent mx={4} textAlign="center">
          <AlertDialogHeader>Game Over</AlertDialogHeader>
          <AlertDialogBody>{children}</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onClose}
              colorScheme="red"
              variant="outline"
            >
              Close
            </Button>
            <Button
              ml={2}
              variant="outline"
              colorScheme="green"
              onClick={onPlayAgainClick}
            >
              Play Again
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default GameOver;
