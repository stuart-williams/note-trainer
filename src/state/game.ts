import { atom } from "recoil";
import { IBinary, IGameDuration } from "types";
import { localStorageEffect } from "utils";

export const answerIndicatorState = atom<-1 | IBinary>({
  key: "answerIndicatorState",
  default: -1,
});

export const gameDurationState = atom<IGameDuration>({
  key: "gameDurationState",
  default: 30000,
  effects_UNSTABLE: [localStorageEffect()],
});
