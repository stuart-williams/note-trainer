import Fretboard from "components/Fretboard";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { fretboardNotesState } from "state";

const FretboardReference: FC = () => {
  const notes = useRecoilValue(fretboardNotesState);

  return <Fretboard activeNotes={notes} referenceMode />;
};

export default FretboardReference;
