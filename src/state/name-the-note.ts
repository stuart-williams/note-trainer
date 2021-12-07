import { atom, DefaultValue, selector } from "recoil";
import { shuffle } from "shuffle-seed";
import { INote } from "types";
import { localStorageEffect, isEnharmonicEquivalent } from "utils";
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

const ntnSeedState = atom<number>({
  key: "ntnSeedState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect(Math.random())],
});

const ntnQueueState = selector<INote[]>({
  key: "ntnQueueState",
  get: ({ get }) => {
    const seed = get(ntnSeedState);
    const notes = get(fretboardNotesState);
    return shuffle(notes, seed);
  },
});

const ntnPointerState = atom<number>({
  key: "ntnPointerState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

const ntnPointerSelector = selector<number>({
  key: "ntnPointerSelector",
  get: ({ get }) => get(ntnPointerState),
  set: ({ get, set, reset }, newValue) => {
    const queue = get(ntnQueueState);

    if (newValue instanceof DefaultValue || !queue[newValue]) {
      set(ntnSeedState, get(ntnSeedState) + Math.random());
      reset(ntnPointerState);
    } else {
      set(ntnPointerState, newValue);
    }
  },
});

export const ntnNoteState = selector<INote>({
  key: "ntnNoteState",
  get: ({ get }) => {
    const queue = get(ntnQueueState);
    const pointer = get(ntnPointerSelector);
    return queue[pointer];
  },
});

export const ntnGameSelector = selector<INote>({
  key: "ntnGameSelector",
  get: ({ get }) => get(ntnNoteState),
  set: ({ get, set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      // Reset game
      reset(ntnPointerSelector);
      reset(ntnGameCorrectState);
      reset(ntnGameAttemptsState);
      return;
    }

    const note = get(ntnNoteState);
    const isCorrect = isEnharmonicEquivalent(newValue.name, note.name);

    // Update game stats
    set(ntnGameAttemptsState, get(ntnGameAttemptsState) + 1);
    set(ntnGameCorrectState, get(ntnGameCorrectState) + Number(isCorrect));
    set(ntnTotalAttemptsState, get(ntnTotalAttemptsState) + 1);
    set(ntnTotalCorrectState, get(ntnTotalCorrectState) + Number(isCorrect));

    if (isCorrect) {
      // Next note
      set(ntnPointerSelector, get(ntnPointerSelector) + 1);
    }
  },
});
