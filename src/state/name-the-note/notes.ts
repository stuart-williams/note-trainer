import { atom, DefaultValue, selector } from "recoil";
import { shuffle } from "shuffle-seed";
import { INote } from "types";
import { localStorageEffect } from "utils";
import { fretboardNotesState } from "../fretboard";

const seedState = atom<number>({
  key: "name-the-note/seedState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect(Math.random())],
});

const queueState = selector<INote[]>({
  key: "name-the-note/queueState",
  get: ({ get }) => shuffle(get(fretboardNotesState), get(seedState)),
});

const pointerState = atom<number>({
  key: "name-the-note/pointerState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const pointerProxySelector = selector<number>({
  key: "name-the-note/pointerProxySelector",
  get: ({ get }) => get(pointerState),
  set: ({ get, set, reset }, newValue) => {
    const queue = get(queueState);

    if (newValue instanceof DefaultValue || !queue[newValue]) {
      reset(pointerState);
      set(seedState, get(seedState) + Math.random());
    } else {
      set(pointerState, newValue);
    }
  },
});

export const targetNoteState = selector<INote>({
  key: "name-the-note/targetNoteState",
  get: ({ get }) => get(queueState)[get(pointerState)],
});
