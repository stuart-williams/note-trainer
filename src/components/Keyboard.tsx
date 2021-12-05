import { Center, Container, Text } from "@chakra-ui/react";
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

const Keyboard: FC<Props> = ({ onClick }) => {
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
    <Container maxW="container.md" alignSelf="center" h="220px">
      <Piano
        stopNote={identity}
        keyboardShortcuts={keyboardShortcuts}
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midi: number) => onClick(midiToNoteName(midi))}
        renderNoteLabel={(args: LabelArgs) => {
          const noteName = midiToNoteName(args.midiNumber);

          return (
            <Center p={2}>
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

export default Keyboard;
