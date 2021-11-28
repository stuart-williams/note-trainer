import { atom, selector } from "recoil";
import { IFretboardId } from "types";
import { localStorageEffect } from "utils";
import { ntnActiveNoteState, ntnGameSelector } from "./name-the-note";

export const fretboardIdState = atom<IFretboardId>({
  key: "fretboardIdState",
  default: "standard-6",
  effects_UNSTABLE: [localStorageEffect()],
});

export const fretboardIdSelector = selector<IFretboardId>({
  key: "fretboardIdSelector",
  get: ({ get }) => get(fretboardIdState),
  set: ({ set, reset }, newValue) => {
    set(fretboardIdState, newValue);
    reset(ntnActiveNoteState); // Active note may not exist on new fretboard
    reset(ntnGameSelector);
  },
});

export const leftHandedState = atom<boolean>({
  key: "leftHandedState",
  default: false,
  effects_UNSTABLE: [localStorageEffect()],
});
