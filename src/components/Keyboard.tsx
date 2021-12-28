import { Button, chakra, Container, Grid, GridItem } from "@chakra-ui/react";
import React, { FC, Fragment } from "react";
import { useRecoilValue } from "recoil";
import { halfNotesState } from "state";
import { toDisplayNoteName } from "utils";

const columns = [
  ["C", "C#"],
  ["D", "D#"],
  ["E"],
  ["F", "F#"],
  ["G", "G#"],
  ["A", "A#"],
  ["B"],
];

const KeyboardContainer = chakra(Container, {
  baseStyle: {
    px: 1,
    maxH: "200px",
    flex: "1 1 auto",
    alignSelf: "center",
    maxW: "container.md",
  },
});

const Key = chakra(Button, {
  baseStyle: {
    h: "100%",
    minH: "40px",
    fontSize: "lg",
    borderWidth: "1px",
    borderColor: "gray.300",
  },
});

interface Props {
  onClick: (noteName: string) => void;
}

const Keyboard: FC<Props> = ({ onClick }) => {
  const halfNotes = useRecoilValue(halfNotesState);

  return (
    <KeyboardContainer>
      <Grid
        h="100%"
        gridGap={{ base: 1, lg: 2 }}
        templateColumns="repeat(7, 1fr)"
      >
        {columns.map((notes, col) => (
          <Fragment key={col}>
            {notes.map((note, row) => (
              <GridItem
                key={row}
                gridColumn={col + 1}
                gridRow={notes.length === 1 ? "1 / 3" : 2 - row}
              >
                <Key
                  isFullWidth
                  onClick={() => onClick(note)}
                  color={note.includes("#") ? "white" : "black"}
                  colorScheme={note.includes("#") ? "ebony" : "ivory"}
                >
                  {toDisplayNoteName(note, halfNotes)}
                </Key>
              </GridItem>
            ))}
          </Fragment>
        ))}
      </Grid>
    </KeyboardContainer>
  );
};

export default Keyboard;
