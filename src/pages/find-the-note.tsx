import { Heading } from "@chakra-ui/react";
import Fretboard from "components/Fretboard";
import RotateDevice from "components/RotateDevice";
import { without } from "lodash";
import React, { FC, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import simplur from "simplur";
import {
  ftnCountState,
  ftnGameSelector,
  ftnNoteState,
  halfNotesState,
} from "state";
import { INote } from "types";
import { toDisplayNoteName } from "utils";

const FindTheNotePage: FC = () => {
  const targetNote = useRecoilValue(ftnNoteState);
  const [activeNotes, updateGame] = useRecoilState(ftnGameSelector);
  const halfNotes = useRecoilValue(halfNotesState);
  const count = useRecoilValue(ftnCountState);
  const remaining = count - activeNotes.length;

  const noteName = useMemo(
    () => toDisplayNoteName(targetNote, halfNotes),
    [targetNote]
  );

  const handleNoteClick = (note: INote) => {
    if (note.name === targetNote) {
      updateGame([...without(activeNotes, note), note]);
    }
  };

  return (
    <>
      <RotateDevice />
      <Fretboard activeNotes={activeNotes} onNoteClick={handleNoteClick} />
      <Heading alignSelf="center">
        {simplur`Find ${noteName} in ${remaining} plac[e|es]`}
      </Heading>
    </>
  );
};

export default FindTheNotePage;
