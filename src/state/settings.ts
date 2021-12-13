import { atom } from "recoil";
import { IFretboardId, IHalfNotes } from "types";
import { localStorageEffect } from "utils";

export const fretboardIdState = atom<IFretboardId>({
  key: "fretboardIdState",
  default: "standard-6",
  effects_UNSTABLE: [localStorageEffect()],
});

export const leftHandedState = atom<boolean>({
  key: "leftHandedState",
  default: false,
  effects_UNSTABLE: [localStorageEffect()],
});

export const fretMarkersState = atom<boolean>({
  key: "fretMarkersState",
  default: true,
  effects_UNSTABLE: [localStorageEffect()],
});

export const halfNotesState = atom<IHalfNotes>({
  key: "halfNotesState",
  default: "random",
  effects_UNSTABLE: [localStorageEffect()],
});
