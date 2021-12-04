import { VStack } from "@chakra-ui/react";
import Fretboard from "components/Fretboard";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { fretboardNotesState } from "state";

const FretboardReference: FC = () => {
  const notes = useRecoilValue(fretboardNotesState);

  return (
    <VStack align="stretch" px={2}>
      <Fretboard activeNotes={notes} referenceMode />
    </VStack>
  );
};

export default FretboardReference;
