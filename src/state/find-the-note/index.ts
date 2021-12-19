import { without } from "lodash";
import { DefaultValue, selector } from "recoil";
import { INote } from "types";
import {
  activeNotesState,
  pointerProxySelector,
  targetNoteCountState,
  targetNoteState,
} from "./notes";
import { statProxySelector } from "./statistics";

export const gameProxySelector = selector<INote | null>({
  key: "find-the-note/gameProxySelector",
  get: () => null,
  set: ({ get, set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      // Reset stats
      reset(statProxySelector);
      // Reset game
      reset(pointerProxySelector);
      return;
    }

    // Incorrect
    if (newValue === null || newValue.name !== get(targetNoteState)) {
      // Update failed attempt stat
      set(statProxySelector, false);
      // Move on to the next note
      set(pointerProxySelector, get(pointerProxySelector) + 1);
      return;
    }

    // Correct
    const count = get(targetNoteCountState);
    const activeNotes = get(activeNotesState);
    const nextActiveNotes = [...without(activeNotes, newValue), newValue];

    // All notes found
    if (nextActiveNotes.length === count) {
      // Update successful attempt stat
      set(statProxySelector, true);
      // Move on to the next note
      set(pointerProxySelector, get(pointerProxySelector) + 1);
      return;
    }

    // Draw selected note on the fretboard
    set(activeNotesState, nextActiveNotes);
  },
});

export * from "./notes";
export * from "./statistics";
