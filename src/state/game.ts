import { atom } from "recoil";
import { IBinary } from "types";

export const answerIndicatorState = atom<-1 | IBinary>({
  key: "answerIndicatorState",
  default: -1,
});

export const gameDurationState = atom<number>({
  key: "gameDurationState",
  default: 30000,
});
