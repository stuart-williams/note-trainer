import Fretboard from "components/Fretboard";
import React, { FC, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { fretboardNotesState, halfNotesState } from "state";
import { INote } from "types";
import { toDisplayNoteName } from "utils";

const FretboardReference: FC = () => {
  const halfNotes = useRecoilValue(halfNotesState);
  const notes = useRecoilValue(fretboardNotesState);

  const activeNotes = useMemo<INote[]>(
    () =>
      notes.map((note) => ({
        ...note,
        displayName: toDisplayNoteName(note.name, halfNotes),
      })),
    [halfNotes]
  );

  return <Fretboard activeNotes={activeNotes} />;
};

export default FretboardReference;
