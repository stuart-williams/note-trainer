import {
  chakra,
  Container as ContainerComponent,
  Text,
} from "@chakra-ui/react";
import { Midi } from "@tonaljs/tonal";
import { identity } from "lodash";
import React, { FC, useRef } from "react";
import { KeyboardShortcuts, Piano } from "react-piano";
import "react-piano/dist/styles.css";
import { useRecoilValue } from "recoil";
import { halfNotesState } from "state";
import "theme/react-piano.css";
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
    maxH: "220px",
    minH: "100px",
    flex: "1 1 auto",
    maxW: "container.sm",
  },
});

interface Props {
  onClick: (noteName: string) => void;
}

const Keyboard: FC<Props> = ({ onClick, ...props }) => {
  const halfNotes = useRecoilValue(halfNotesState);

  /**
   * renderNoteLabel is called on mouse over for some reason so
   * cache `[midi]: noteName` so we don't randomly switch between
   * sharps and flats when halfNotes = "random"
   */
  const cache = useRef<{ [midi: number]: string }>({});

  const renderNoteLabel = ({ midiNumber: midi }: { midiNumber: number }) => {
    const nameName = cache.current[midi] || toDisplayNoteName(midi, halfNotes);
    cache.current[midi] = nameName;

    return (
      <Text className="ReactPiano__NoteLabel" userSelect="none">
        {nameName}
      </Text>
    );
  };

  const handleClick = (midi: number) => onClick(midiToNoteName(midi));

  return (
    <Container {...props}>
      <Piano
        stopNote={identity}
        noteRange={noteRange}
        playNote={handleClick}
        keyboardShortcuts={shortcuts}
        renderNoteLabel={renderNoteLabel}
      />
    </Container>
  );
};

export default chakra(Keyboard);
