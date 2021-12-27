import Fretboard from "components/Fretboard";
import Keyboard from "components/Keyboard";
import React, { FC, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { fretboardNotesState, halfNotesState } from "state";
import { INote } from "types";
import { toDisplayNoteName } from "utils";

const FretboardReference: FC = () => {
  const halfNotes = useRecoilValue(halfNotesState);
  const notes = useRecoilValue(fretboardNotesState);
  const [noteFilter, setNoteFilter] = useState<string>("");

  const activeNotes = useMemo<INote[]>(
    () =>
      notes.reduce<INote[]>(
        (accum, note) =>
          !noteFilter || note.name === noteFilter
            ? [
                ...accum,
                {
                  ...note,
                  displayName: toDisplayNoteName(note.name, halfNotes),
                },
              ]
            : accum,
        []
      ),
    [noteFilter, halfNotes]
  );

  return (
    <>
      <Fretboard activeNotes={activeNotes} />
      <Keyboard onClick={setNoteFilter} />
    </>
  );
};

export default FretboardReference;
