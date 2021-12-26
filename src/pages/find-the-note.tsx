import { Box, Heading } from "@chakra-ui/react";
import AnswerIndicator from "components/AnswerIndicator";
import Fretboard from "components/Fretboard";
import GameControls from "components/GameControls";
import RotateDevice from "components/RotateDevice";
import React, { FC, useMemo } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import simplur from "simplur";
import { halfNotesState } from "state";
import {
  activeNotesState,
  gameProxySelector,
  gameStatsState,
  targetNoteCountState,
  targetNoteState,
} from "state/find-the-note";
import { INote } from "types";
import { toDisplayNoteName } from "utils";

const FindTheNotePage: FC = () => {
  const stats = useRecoilValue(gameStatsState);
  const halfNotes = useRecoilValue(halfNotesState);
  const targetNote = useRecoilValue(targetNoteState);
  const updateGame = useSetRecoilState(gameProxySelector);
  const count = useRecoilValue(targetNoteCountState);
  const resetGame = useResetRecoilState(gameProxySelector);
  const activeNotes = useRecoilValue(activeNotesState);
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
        stats={stats.game}
        onPlayClick={() => {
          console.log("PLAY CLICK");
          resetGame();
        }}
        onStopClick={() => {
          console.log("STOP CLICK");
        }}
        onTimerStart={() => {
          console.log("TIMER START");
        }}
        onTimerStop={() => {
          console.log("TIMER STOP");
        }}
      />
      <Box position="relative">
        <Fretboard activeNotes={activeNotes} onNoteClick={handleNoteClick} />
        <AnswerIndicator />
      </Box>
      <Heading alignSelf="center">
        Find <mark>{noteName}</mark> in {simplur`${remaining} plac[e|es]`}
      </Heading>
    </>
  );
};

export default FindTheNotePage;
