import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import { find, identity } from "lodash";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { fretboardNotesState, fretboardState } from "state";
import { INote } from "types";

const NotesGrid = chakra(SimpleGrid, {
  baseStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});

const Note = chakra(Box, {
  baseStyle: {
    position: "relative",
    _before: {
      top: "50%",
      left: "50%",
      color: "white",
      display: "flex",
      alignItems: "center",
      borderRadius: "full",
      position: "absolute",
      justifyContent: "center",
      h: { base: "24px", md: "34px" },
      w: { base: "24px", md: "34px" },
      transform: "translate(-50%, -50%)",
    },
  },
});

interface Props {
  activeNotes: INote[];
  onNoteClick?: (note: INote) => void;
}

const Notes: FC<Props> = ({ activeNotes, onNoteClick = identity }) => {
  const fretboard = useRecoilValue(fretboardState);
  const notes = useRecoilValue(fretboardNotesState);
  const columns = fretboard.fretCount + 1;

  return (
    <NotesGrid columns={columns}>
      {notes.map((note, i) => {
        const activeNote = find(activeNotes, note);
        const content = activeNote?.displayName || "";

        return (
          <Note
            key={i}
            onClick={() => onNoteClick(note)}
            sx={
              activeNote
                ? {
                    ":before": {
                      bg: "red.500",
                      content: `"${content}"`,
                    },
                  }
                : undefined
            }
          />
        );
      })}
    </NotesGrid>
  );
};

export default Notes;
