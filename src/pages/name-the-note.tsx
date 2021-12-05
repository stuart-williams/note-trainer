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
  const [note, updateGame] = useRecoilState(ntnGameSelector);
  const resetGame = useResetRecoilState(ntnGameSelector);

  const handleAnswer = (name: string) => {
    updateGame({ name } as INote);
  };

  return (
    <>
      <GameControls
        correct={correct}
        attempts={attempts}
        onResetGame={resetGame}
      />
      <Fretboard activeNotes={note ? [note] : []} />
      <Keyboard alignSelf="center" onClick={handleAnswer} />
    </>
  );
};

export default NameTheNotePage;
