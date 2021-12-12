import { Box, chakra } from "@chakra-ui/react";
import woodSrc from "images/wood.png";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { fretboardState } from "state";
import { INote } from "types";
import Frets from "./Frets";
import Notes from "./Notes";
import Strings from "./Strings";

const Board = chakra(Box, {
  baseStyle: {
    position: "relative",
    bg: `#222222 url(${woodSrc})`,
  },
});

interface Props {
  activeNotes: INote[];
  onNoteClick?: (note: INote) => void;
}

const Fretboard: FC<Props> = ({ activeNotes, onNoteClick }) => {
  const fretboard = useRecoilValue(fretboardState);

  return (
    <Board h={fretboard.h}>
      <Frets />
      <Strings />
      <Notes onNoteClick={onNoteClick} activeNotes={activeNotes} />
    </Board>
  );
};

export default Fretboard;
