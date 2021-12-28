import { Box, VStack } from "@chakra-ui/react";
import AnswerIndicator from "components/AnswerIndicator";
import Fretboard from "components/Fretboard";
import GameControls from "components/GameControls";
import Keyboard from "components/Keyboard";
import React, { FC } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { gameProxySelector, gameStatsState } from "state/name-the-note";
import { INote } from "types";

const NameTheNotePage: FC = () => {
  const stats = useRecoilValue(gameStatsState);
  const [note, updateGame] = useRecoilState(gameProxySelector);
  const resetGame = useResetRecoilState(gameProxySelector);

  const handleAnswer = (name: string) => updateGame({ name } as INote);

  return (
    <VStack
      align="stretch"
      flex="1 1 auto"
      mt={{ base: 1, md: 2 }}
      spacing={{ base: 1, md: 2 }}
    >
      <GameControls stats={stats.game} onTimerStart={resetGame} />
      <Box position="relative">
        <Fretboard activeNotes={note ? [note] : []} />
        <AnswerIndicator indicateStates={[0]} />
      </Box>
      <Keyboard onClick={handleAnswer} />
    </VStack>
  );
};

export default NameTheNotePage;
