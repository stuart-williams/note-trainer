import { shuffle } from "lodash";
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

const ntnQueueIdState = atom<number>({
  key: "ntnQueueIdState",
  default: 0,
});

const ntnQueuePointerState = atom<number>({
  key: "ntnQueuePointerState",
  default: 0,
});

export const ntnQueueState = selector<INote[]>({
  key: "ntnQueueState",
  get: ({ get }) => {
    get(ntnQueueIdState);
    return shuffle(get(fretboardNotesState));
  },
});

export const ntnActiveNoteState = selector<INote>({
  key: "ntnActiveNoteState",
  get: ({ get }) => get(ntnQueueState)[get(ntnQueuePointerState)],
});

export const ntnGameSelector = selector<INote>({
  key: "ntnGameSelector",
  get: ({ get }) => get(ntnActiveNoteState),
  set: ({ get, set, reset }, newValue) => {
    // RESET
    if (newValue instanceof DefaultValue) {
      // Reset game stats
      reset(ntnGameAttemptsState);
      reset(ntnGameCorrectState);

      // Trigger a queue reshuffle
      set(ntnQueueIdState, get(ntnQueueIdState) + 1);
      reset(ntnQueuePointerState);
      return;
    }

    const activeNote = get(ntnActiveNoteState);
    const isCorrect = newValue.name === activeNote.name;

    // Update game and total stats
    set(ntnGameAttemptsState, get(ntnGameAttemptsState) + 1);
    set(ntnGameCorrectState, get(ntnGameCorrectState) + Number(isCorrect));
    set(ntnTotalAttemptsState, get(ntnTotalAttemptsState) + 1);
    set(ntnTotalCorrectState, get(ntnTotalCorrectState) + Number(isCorrect));

    if (!isCorrect) {
      return;
    }

    // Find the next note in the queue
    const notesQueue = get(ntnQueueState);
    const nextPointer = get(ntnQueuePointerState) + 1;

    if (!notesQueue[nextPointer]) {
      // Trigger a queue reshuffle
      set(ntnQueueIdState, get(ntnQueueIdState) + 1);
      reset(ntnQueuePointerState);
      return;
    }

    set(ntnQueuePointerState, nextPointer);
  },
});
