import { Box, chakra } from "@chakra-ui/react";
import Frets from "components/Fretboard/Frets";
import React, { FC } from "react";
import { INote } from "types";
import Notes from "./Notes";
import Strings from "./Strings";

const Board = chakra(Box, {
  baseStyle: {
    h: 220,
    position: "relative",
    bg: "url('wood.png')",
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
