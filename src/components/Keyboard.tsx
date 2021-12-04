import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  onClick: (noteName: string) => void;
}

const blackKeys = [
  {
    end: 4,
    start: 2,
    note: "C#",
  },
  {
    end: 6,
    start: 4,
    note: "D#",
  },
  {
    end: 10,
    start: 8,
    note: "F#",
  },
  {
    end: 12,
    start: 10,
    note: "G#",
  },
  {
    end: 14,
    start: 12,
    note: "A#",
  },
];

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];

const Keyboard: FC<Props> = ({ onClick }) => (
  <Container maxW="container.lg" alignSelf="center">
    <SimpleGrid columns={14} gridGap={1} mb={1}>
      {blackKeys.map(({ start, end, note }) => (
        <Button
          key={note}
          colorScheme="red"
          gridColumnEnd={end}
          gridColumnStart={start}
          onClick={() => onClick(note)}
        >
          {note}
        </Button>
      ))}
    </SimpleGrid>
    <SimpleGrid columns={7} gridGap={1}>
      {whiteKeys.map((note) => (
        <Button key={note} colorScheme="blue" onClick={() => onClick(note)}>
          {note}
        </Button>
      ))}
    </SimpleGrid>
  </Container>
);

export default Keyboard;
