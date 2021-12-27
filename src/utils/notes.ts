import { Note } from "@tonaljs/tonal";
import { repeat, times } from "lodash";
import { IHalfNotes } from "types";

export const getNoteNames = (): string[] =>
  times(12).map((sharps) => Note.simplify("C" + repeat("#", sharps)));

export const toDisplayNoteName = (
  note: string,
  halfNotes: IHalfNotes = "sharps"
): string => {
  if (Note.enharmonic(note) === note || halfNotes === "sharps") {
    return note;
  }

  if (halfNotes === "flats") {
    return Note.enharmonic(note);
  }

  return Math.random() > 0.5 ? Note.enharmonic(note) : note;
};
