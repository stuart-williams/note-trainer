import { atom } from "recoil";
import { IBinary } from "types";
import { localStorageEffect } from "utils";

export const answerIndicatorState = atom<-1 | IBinary>({
  key: "answerIndicatorState",
  default: -1,
});

export const gameDurationState = atom<number>({
  key: "gameDurationState",
  default: 30000,
  effects_UNSTABLE: [localStorageEffect()],
});
