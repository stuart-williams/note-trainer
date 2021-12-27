import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { identity } from "lodash";
import React, { FC, useEffect, useRef, useState } from "react";
import { FcRotateToLandscape } from "react-icons/fc";
import { useOrientation } from "react-use";

const RotateDevice: FC = () => {
  const orientation = useOrientation();
  const isPortrait = orientation.type.includes("portrait");
  const [isOpen, setOpen] = useState(isPortrait);
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(isPortrait);

    if (!isPortrait) {
      // auto-hide the address bar
      window.scrollTo(0, 1);
    }
  }, [isPortrait]);

  return (
    <AlertDialog
      isCentered
      isOpen={isOpen}
      onClose={identity}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent mx={4} textAlign="center">
          <AlertDialogHeader>Rotate Device</AlertDialogHeader>
          <AlertDialogBody as={VStack} pb={4}>
            <Icon as={FcRotateToLandscape} boxSize={20} />
            <Text>Rotate your device for a better experience</Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default RotateDevice;
