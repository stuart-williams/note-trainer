import { filter } from "lodash";
import { atom, DefaultValue, selector } from "recoil";
import { shuffle } from "shuffle-seed";
import { INote } from "types";
import { getNoteNames, localStorageEffect } from "utils";
import { fretboardNotesState } from "./fretboard";

export const ftnFrettedNotesState = atom<INote[]>({
  key: "ftnFrettedNotesState",
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

    reset(ftnFrettedNotesState);
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

export const ftnGameSelector = selector<INote[]>({
  key: "ftnGameSelector",
  get: ({ get }) => get(ftnFrettedNotesState),
  set: ({ get, set }, newValue) => {
    if (
      newValue instanceof DefaultValue ||
      newValue.length === get(ftnCountState)
    ) {
      // All notes found so move onto the next
      set(ftnPointerSelector, get(ftnPointerSelector) + 1);
    } else {
      set(ftnFrettedNotesState, newValue);
    }
  },
});
