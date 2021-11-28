import { Box, chakra } from "@chakra-ui/react";
import Frets from "components/Fretboard/Frets";
import woodSrc from "images/wood.png";
import React, { FC } from "react";
import { INote } from "types";
import Notes from "./Notes";
import Strings from "./Strings";

const Board = chakra(Box, {
  baseStyle: {
    h: 220,
    position: "relative",
    bg: `#222222 url(${woodSrc})`,
  },
});

interface Props {
  frettedNotes: INote[];
  onNoteClick?: (note: INote) => void;
}

const Fretboard: FC<Props> = ({ frettedNotes, onNoteClick }) => (
  <Board>
    <Frets />
    <Strings />
    <Notes frettedNotes={frettedNotes} onNoteClick={onNoteClick} />
  </Board>
);

export default Fretboard;
