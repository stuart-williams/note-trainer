import { atom } from "recoil";
import { IBinary } from "types";

export const answerIndicatorState = atom<-1 | IBinary>({
  key: "answerIndicatorState",
  default: -1,
});

export * from "./fretboard";
export * from "./settings";
export * from "./statistics";
