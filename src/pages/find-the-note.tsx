import { Heading } from "@chakra-ui/react";
import Fretboard from "components/Fretboard";
import GameControls from "components/GameControls";
import RotateDevice from "components/RotateDevice";
import React, { FC, useMemo } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import simplur from "simplur";
import {
  ftnActiveNotesState,
  ftnCountState,
  ftnGameAttemptsState,
  ftnGameCorrectState,
  ftnGameSelector,
  ftnNoteState,
  halfNotesState,
} from "state";
import { INote } from "types";
import { toDisplayNoteName } from "utils";

const FindTheNotePage: FC = () => {
  const targetNote = useRecoilValue(ftnNoteState);
  const halfNotes = useRecoilValue(halfNotesState);
  const correct = useRecoilValue(ftnGameCorrectState);
  const updateGame = useSetRecoilState(ftnGameSelector);
  const attempts = useRecoilValue(ftnGameAttemptsState);
  const resetGame = useResetRecoilState(ftnGameSelector);
  const activeNotes = useRecoilValue(ftnActiveNotesState);
  const count = useRecoilValue(ftnCountState);
  const remaining = count - activeNotes.length;

  const noteName = useMemo(
    () => toDisplayNoteName(targetNote, halfNotes),
    [targetNote]
  );

  const handleNoteClick = (note: INote) => updateGame(note);

  return (
    <>
      <RotateDevice />
      <GameControls
        correct={correct}
        attempts={attempts}
        onResetGame={resetGame}
      />
      <Fretboard activeNotes={activeNotes} onNoteClick={handleNoteClick} />
      <Heading alignSelf="center">
        Find <mark>{noteName}</mark> in {simplur`${remaining} plac[e|es]`}
      </Heading>
    </>
  );
};

export default FindTheNotePage;
