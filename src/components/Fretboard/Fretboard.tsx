import { Box, chakra } from "@chakra-ui/react";
import Frets from "components/Fretboard/Frets";
import woodSrc from "images/wood.png";
import React, { FC } from "react";
import { INote } from "types";
import Notes from "./Notes";
import Strings from "./Strings";

const Board = chakra(Box, {
  baseStyle: {
    h: "220px",
    position: "relative",
    bg: `#222222 url(${woodSrc})`,
  },
});

interface Props {
  activeNotes: INote[];
  onNoteClick?: (note: INote) => void;
}

const Fretboard: FC<Props> = ({ activeNotes, onNoteClick }) => (
  <Board>
    <Frets />
    <Strings />
    <Notes onNoteClick={onNoteClick} activeNotes={activeNotes} />
  </Board>
);

export default Fretboard;
