import { Center, Container, Text, chakra } from "@chakra-ui/react";
import { Midi } from "@tonaljs/tonal";
import { identity } from "lodash";
import React, { FC } from "react";
import { KeyboardShortcuts, Piano } from "react-piano";
import "react-piano/dist/styles.css";

interface LabelArgs {
  midiNumber: number;
}

interface Props {
  onClick: (noteName: string) => void;
}

const Keyboard: FC<Props> = ({ onClick, ...props }) => {
  const firstNote = Midi.toMidi("c4");
  const lastNote = Midi.toMidi("b4");

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote,
    lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const midiToNoteName = (midiNumber: number): string =>
    Midi.midiToNoteName(midiNumber, { sharps: true, pitchClass: true });

  return (
    <Container
      {...props}
      minH="80px"
      flex="1 1 auto"
      maxW="container.sm"
      maxH={{ base: "140px", md: "220px" }}
    >
      <Piano
        stopNote={identity}
        keyboardShortcuts={keyboardShortcuts}
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midi: number) => onClick(midiToNoteName(midi))}
        renderNoteLabel={(args: LabelArgs) => {
          const noteName = midiToNoteName(args.midiNumber);

          return (
            <Center p={{ base: 0, sm: 1, md: 2 }}>
              <Text
                fontWeight="bold"
                color={noteName.includes("#") ? "white" : "black"}
              >
                {noteName}
              </Text>
            </Center>
          );
        }}
      />
    </Container>
  );
};

export default chakra(Keyboard);
