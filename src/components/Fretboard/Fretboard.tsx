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
  activeNotes: INote[];
  referenceMode?: boolean;
  onNoteClick?: (note: INote) => void;
}

const Fretboard: FC<Props> = ({ activeNotes, referenceMode, onNoteClick }) => (
  <Board>
    <Frets />
    <Strings />
    <Notes
      onNoteClick={onNoteClick}
      activeNotes={activeNotes}
      referenceMode={referenceMode}
    />
  </Board>
);

export default Fretboard;
