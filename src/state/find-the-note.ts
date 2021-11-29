import { filter, shuffle } from "lodash";
import { atom, DefaultValue, selector } from "recoil";
import { INote } from "types";
import { getNoteNames, localStorageEffect } from "utils";
import { fretboardNotesState } from "./fretboard";

// TODO: Refactor to use pointer

export const ftnNotesQueueState = atom<string[]>({
  key: "ftnNotesQueueState",
  default: shuffle(getNoteNames()),
  effects_UNSTABLE: [localStorageEffect()],
});

export const ftnTargetNoteState = atom<string>({
  key: "ftnTargetNoteState",
  default: selector({
    key: "ftnTargetNoteDefaultSelector",
    get: ({ get }) => get(ftnNotesQueueState)[0],
  }),
  effects_UNSTABLE: [localStorageEffect()],
});

export const ftnTargetNoteCountState = selector<number>({
  key: "ftnTargetNoteCountState",
  get: ({ get }) => {
    const notes = get(fretboardNotesState);
    const targetNote = get(ftnTargetNoteState);

    return filter(notes, ["name", targetNote]).length;
  },
});

export const ftnFrettedNotesState = atom<INote[]>({
  key: "ftnFrettedNotesState",
  default: [],
  effects_UNSTABLE: [localStorageEffect()],
});

export const ftnGameSelector = selector<INote[]>({
  key: "ftnGameSelector",
  get: ({ get }) => get(ftnFrettedNotesState),
  set: ({ get, set, reset }, newValue) => {
    if (
      !(
        newValue instanceof DefaultValue ||
        newValue.length === get(ftnTargetNoteCountState)
      )
    ) {
      set(ftnFrettedNotesState, newValue);
      return;
    }

    const targetNote = get(ftnTargetNoteState);
    const notesQueue = get(ftnNotesQueueState);
    const targetNoteIndex = notesQueue.indexOf(targetNote) + 1;

    let nextNote = notesQueue[targetNoteIndex];
    // Reshuffle queue
    if (!nextNote) {
      const nextQueue = shuffle(notesQueue);
      nextNote = nextQueue[0];
      set(ftnNotesQueueState, nextQueue);
    }

    set(ftnTargetNoteState, nextNote);
    reset(ftnFrettedNotesState);
  },
});
