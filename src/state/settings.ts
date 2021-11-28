import { atom } from "recoil";
import { IFretboardId } from "types";
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
