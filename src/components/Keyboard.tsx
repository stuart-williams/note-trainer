import {
  chakra,
  Container as ContainerComponent,
  Text,
} from "@chakra-ui/react";
import { Midi, Note } from "@tonaljs/tonal";
import { identity } from "lodash";
import React, { FC, useRef } from "react";
import { KeyboardShortcuts, Piano } from "react-piano";
import "react-piano/dist/styles.css";
import { useRecoilValue } from "recoil";
import { halfNotesState } from "state";
import { midiToNoteName, toDisplayNoteName } from "utils";

const noteRange = {
  first: Midi.toMidi("c4"),
  last: Midi.toMidi("b4"),
};

const shortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const Container = chakra(ContainerComponent, {
  baseStyle: {
    minH: "100px",
    flex: "1 1 auto",
    maxW: "container.sm",
    maxH: {
      base: "140px",
      md: "220px",
    },
  },
});

const NoteLabel = chakra(Text, {
  baseStyle: {
    userSelect: "none",
    fontWeight: "bold",
    textAlign: "center",
    p: {
      base: 0,
      sm: 1,
      md: 2,
    },
  },
});

interface Props {
  onClick: (noteName: string) => void;
}

const Keyboard: FC<Props> = ({ onClick, ...props }) => {
  const halfNotes = useRecoilValue(halfNotesState);
  const notes = useRef<{ [midi: number]: string }>({});

  const displayName = (midi: number) => {
    const name = notes.current[midi] || toDisplayNoteName(midi, halfNotes);
    notes.current[midi] = name;
    return name;
  };

  return (
    <Container {...props}>
      <Piano
        stopNote={identity}
        noteRange={noteRange}
        keyboardShortcuts={shortcuts}
        playNote={(midiNumber: number) => onClick(midiToNoteName(midiNumber))}
        renderNoteLabel={({ midiNumber }: { midiNumber: number }) => {
          const noteName = displayName(midiNumber);
          const blackKey = Note.enharmonic(noteName) !== noteName;

          return (
            <NoteLabel color={blackKey ? "white" : "black"}>
              {noteName}
            </NoteLabel>
          );
        }}
      />
    </Container>
  );
};

export default chakra(Keyboard);
