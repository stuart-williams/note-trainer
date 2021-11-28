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
      h: "34px",
      w: "34px",
      top: "50%",
      left: "50%",
      content: `""`,
      color: "white",
      display: "flex",
      alignItems: "center",
      borderRadius: "full",
      position: "absolute",
      justifyContent: "center",
      transform: "translate(-50%, -50%)",
    },
  },
});

interface Props {
  frettedNotes: INote[];
  referenceMode?: boolean;
  onNoteClick?: (note: INote) => void;
}

const Notes: FC<Props> = ({
  frettedNotes,
  referenceMode,
  onNoteClick = identity,
}) => {
  const fretboard = useRecoilValue(fretboardState);
  const notes = useRecoilValue(fretboardNotesState);
  const columns = fretboard.fretCount + 1;

  return (
    <NotesGrid columns={columns}>
      {notes.map((note, i) => {
        const { id, name, string } = note;
        const isFretted = Boolean(find(frettedNotes, { id, string }));

        return (
          <Note
            key={i}
            data-note={name}
            onClick={() => onNoteClick(note)}
            sx={
              isFretted
                ? {
                    ":before": {
                      bg: "red.500",
                      content: referenceMode ? `"${note.name}"` : undefined,
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
