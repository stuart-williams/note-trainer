import { findIndex, shuffle } from "lodash";
import { atom, DefaultValue, selector } from "recoil";
import { INote } from "types";
import { localStorageEffect } from "utils";
import { fretboardNotesState } from "./fretboard";

export const ntnTotalAttemptsState = atom<number>({
  key: "ntnTotalAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnTotalCorrectState = atom<number>({
  key: "ntnTotalCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnGameAttemptsState = atom<number>({
  key: "ntnGameAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnGameCorrectState = atom<number>({
  key: "ntnGameCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnNotesQueueState = atom<INote[]>({
  key: "ntnNotesQueueState",
  default: selector<INote[]>({
    key: "ntnNotesQueueDefaultSelector",
    get: ({ get }) => shuffle(get(fretboardNotesState)),
  }),
});

export const ntnActiveNoteState = atom<INote>({
  key: "ntnActiveNoteState",
  default: selector<INote>({
    key: "ntnActiveNoteDefaultSelector",
    get: ({ get }) => get(ntnNotesQueueState)[0],
  }),
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnGameSelector = selector<INote>({
  key: "ntnGameSelector",
  get: ({ get }) => get(ntnActiveNoteState),
  set: ({ get, set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(ntnGameAttemptsState);
      reset(ntnGameCorrectState);
      return;
    }

    const activeNote = get(ntnActiveNoteState);
    const isCorrect = newValue.name === activeNote.name;

    // Update stats
    set(ntnGameAttemptsState, get(ntnGameAttemptsState) + 1);
    set(ntnGameCorrectState, get(ntnGameCorrectState) + Number(isCorrect));
    set(ntnTotalAttemptsState, get(ntnTotalAttemptsState) + 1);
    set(ntnTotalCorrectState, get(ntnTotalCorrectState) + Number(isCorrect));

    if (!isCorrect) {
      return;
    }

    // Next note
    const notesQueue = get(ntnNotesQueueState);
    const activeNoteIndex = findIndex(notesQueue, activeNote) + 1;

    let nextNote = notesQueue[activeNoteIndex];
    // Reshuffle queue
    if (!nextNote) {
      const nextQueue = shuffle(notesQueue);
      nextNote = nextQueue[0];
      set(ntnNotesQueueState, nextQueue);
    }

    set(ntnActiveNoteState, nextNote);
  },
});
