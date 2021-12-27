import { Button, Grid, GridItem } from "@chakra-ui/react";
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

interface Props {
  onClick: (noteName: string) => void;
}

const Keyboard: FC<Props> = ({ onClick }) => {
  const halfNotes = useRecoilValue(halfNotesState);

  return (
    <Grid
      px={2}
      h="100%"
      flex={1}
      gridGap={2}
      maxH="200px"
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
              <Button
                h="100%"
                isFullWidth
                colorScheme="blue"
                onClick={() => onClick(note)}
              >
                {toDisplayNoteName(note, halfNotes)}
              </Button>
            </GridItem>
          ))}
        </Fragment>
      ))}
    </Grid>
  );
};

export default Keyboard;
