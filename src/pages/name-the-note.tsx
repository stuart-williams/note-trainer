import { Box } from "@chakra-ui/react";
import AnswerIndicator from "components/AnswerIndicator";
import Fretboard from "components/Fretboard";
import GameControls from "components/GameControls";
import Keyboard from "components/Keyboard";
import RotateDevice from "components/RotateDevice";
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
    <>
      <RotateDevice />
      <GameControls
        stats={stats.game}
        onPlayClick={() => {
          console.log("PLAY CLICK");
        }}
        onStopClick={() => {
          console.log("STOP CLICK");
        }}
        onTimerStart={() => {
          resetGame();
          console.log("TIMER START");
        }}
        onTimerStop={() => {
          console.log("TIMER STOP");
        }}
      />
      <Box position="relative">
        <Fretboard activeNotes={note ? [note] : []} />
        <AnswerIndicator indicateStates={[0]} />
      </Box>
      <Keyboard alignSelf="center" onClick={handleAnswer} />
    </>
  );
};

export default NameTheNotePage;
