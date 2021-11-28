import { VStack } from "@chakra-ui/react";
import Fretboard from "components/Fretboard";
import GameControls from "components/GameControls";
import Keyboard from "components/Keyboard";
import React, { FC } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  ntnGameAttemptsState,
  ntnGameCorrectState,
  ntnGameSelector,
} from "state";
import { INote } from "types";

const NameTheNotePage: FC = () => {
  const correct = useRecoilValue(ntnGameCorrectState);
  const attempts = useRecoilValue(ntnGameAttemptsState);
  const [activeNote, updateGame] = useRecoilState(ntnGameSelector);
  const resetGame = useResetRecoilState(ntnGameSelector);

  const handleAnswer = (name: string) => {
    updateGame({ name } as INote);
  };

  return (
    <VStack align="stretch" px={2}>
      <GameControls
        correct={correct}
        attempts={attempts}
        onResetGame={resetGame}
      />
      <Fretboard frettedNotes={activeNote ? [activeNote] : []} />
      <Keyboard onClick={handleAnswer} />
    </VStack>
  );
};

export default NameTheNotePage;
