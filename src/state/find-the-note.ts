import { filter, without } from "lodash";
import { atom, DefaultValue, selector } from "recoil";
import { shuffle } from "shuffle-seed";
import { INote } from "types";
import { getNoteNames, localStorageEffect } from "utils";
import { fretboardNotesState } from "./fretboard";

export const ftnTotalAttemptsState = atom<number>({
  key: "ftnTotalAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ftnTotalCorrectState = atom<number>({
  key: "ftnTotalCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ftnGameAttemptsState = atom<number>({
  key: "ftnGameAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ftnGameCorrectState = atom<number>({
  key: "ftnGameCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ftnActiveNotesState = atom<INote[]>({
  key: "ftnActiveNotesState",
  default: [],
  effects_UNSTABLE: [localStorageEffect()],
});

const ftnSeedState = atom<number>({
  key: "ftnSeedState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect(Math.random())],
});

const ftnQueueState = selector<string[]>({
  key: "ftnQueueState",
  get: ({ get }) => {
    const seed = get(ftnSeedState);
    const notes = getNoteNames();
    return shuffle(notes, seed);
  },
});

const ftnPointerState = atom<number>({
  key: "ftnPointerState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

const ftnPointerSelector = selector<number>({
  key: "ftnPointerSelector",
  get: ({ get }) => get(ftnPointerState),
  set: ({ get, set, reset }, newValue) => {
    const queue = get(ftnQueueState);

    if (newValue instanceof DefaultValue || !queue[newValue]) {
      set(ftnSeedState, get(ftnSeedState) + Math.random());
      reset(ftnPointerState);
    } else {
      set(ftnPointerState, newValue);
    }

    reset(ftnActiveNotesState);
  },
});

export const ftnNoteState = selector<string>({
  key: "ftnNoteState",
  get: ({ get }) => {
    const queue = get(ftnQueueState);
    const pointer = get(ftnPointerSelector);
    return queue[pointer];
  },
});

export const ftnCountState = selector<number>({
  key: "ftnCountState",
  get: ({ get }) => {
    const notes = get(fretboardNotesState);
    const targetNote = get(ftnNoteState);

    return filter(notes, ["name", targetNote]).length;
  },
});

export const ftnGameSelector = selector<INote | null>({
  key: "ftnGameSelector",
  get: () => null,
  set: ({ get, set, reset }, newValue) => {
    // Reset
    if (newValue instanceof DefaultValue) {
      // Reset game stats
      reset(ftnGameCorrectState);
      reset(ftnGameAttemptsState);
      // Next note
      set(ftnPointerSelector, get(ftnPointerSelector) + 1);
      return;
    }

    // Incorrect
    if (newValue === null || newValue.name !== get(ftnNoteState)) {
      // Next note
      set(ftnPointerSelector, get(ftnPointerSelector) + 1);
      // Update attempt stats
      set(ftnGameAttemptsState, get(ftnGameAttemptsState) + 1);
      set(ftnTotalAttemptsState, get(ftnTotalAttemptsState) + 1);
      return;
    }

    // Correct
    const count = get(ftnCountState);
    const activeNotes = get(ftnActiveNotesState);
    const nextActiveNotes = [...without(activeNotes, newValue), newValue];

    if (nextActiveNotes.length === count) {
      // Next note
      set(ftnPointerSelector, get(ftnPointerSelector) + 1);
      // Update correct stats
      set(ftnGameCorrectState, get(ftnGameCorrectState) + 1);
      set(ftnGameAttemptsState, get(ftnGameAttemptsState) + 1);
      set(ftnTotalCorrectState, get(ftnTotalCorrectState) + 1);
      set(ftnTotalAttemptsState, get(ftnTotalAttemptsState) + 1);
      return;
    }

    set(ftnActiveNotesState, nextActiveNotes);
  },
});
