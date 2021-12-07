import { Midi, Note } from "@tonaljs/tonal";
import { isNumber, repeat, times } from "lodash";
import { IHalfNotes } from "types";

export const getNoteNames = (): string[] =>
  times(12).map((sharps) => Note.simplify("C" + repeat("#", sharps)));

export const midiToNoteName = (midiNumber: number): string =>
  Midi.midiToNoteName(midiNumber, { sharps: true, pitchClass: true });

export const isEnharmonicEquivalent = (a: string, b: string): boolean =>
  a === b || Note.enharmonic(a) === b;

export const toNoteName = (
  note: string | number,
  halfNotes: IHalfNotes = "sharps"
): string => {
  const noteName = isNumber(note) ? midiToNoteName(note) : note;

  if (Note.enharmonic(noteName) === noteName || halfNotes === "sharps") {
    return noteName;
  }

  if (halfNotes === "flats") {
    return Note.enharmonic(noteName);
  }

  return Math.random() > 0.5 ? Note.enharmonic(noteName) : noteName;
};
