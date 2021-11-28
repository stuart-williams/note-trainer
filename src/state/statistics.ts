import { DefaultValue, selector } from "recoil";
import { percent } from "utils";
import {
  ntnGameSelector,
  ntnTotalAttemptsState,
  ntnTotalCorrectState,
} from "./name-the-note";

interface GameStats {
  game: string;
  percent: number;
  correct: number;
  attempts: number;
}

export const gameStatsState = selector<GameStats[]>({
  key: "gameStatsState",
  get: ({ get }) => [
    {
      game: "Name the Note",
      correct: get(ntnTotalCorrectState),
      attempts: get(ntnTotalAttemptsState),
      percent: percent(get(ntnTotalCorrectState), get(ntnTotalAttemptsState)),
    },
  ],
  set: ({ reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(ntnGameSelector);
      reset(ntnTotalCorrectState);
      reset(ntnTotalAttemptsState);
    }
  },
});
