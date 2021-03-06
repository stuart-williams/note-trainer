import { Box, Heading, VStack } from "@chakra-ui/react";
import AnswerIndicator from "components/AnswerIndicator";
import Fretboard from "components/Fretboard";
import GameControls from "components/GameControls";
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
    <VStack
      align="stretch"
      flex="1 1 auto"
      my={{ base: 1, lg: 2 }}
      spacing={{ base: 1, lg: 2 }}
    >
      <GameControls stats={stats.game} onTimerStart={resetGame} />
      <Box position="relative">
        <Fretboard activeNotes={activeNotes} onNoteClick={handleNoteClick} />
        <AnswerIndicator />
      </Box>
      <Heading alignSelf="center">
        Find <mark>{noteName}</mark> in {simplur`${remaining} plac[e|es]`}
      </Heading>
    </VStack>
  );
};

export default FindTheNotePage;
