import { DefaultValue, selector } from "recoil";
import { percent } from "utils";
import {
  ftnGameSelector,
  ftnTotalAttemptsState,
  ftnTotalCorrectState,
} from "./find-the-note";
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
    {
      game: "Find the Note",
      correct: get(ftnTotalCorrectState),
      attempts: get(ftnTotalAttemptsState),
      percent: percent(get(ftnTotalCorrectState), get(ftnTotalAttemptsState)),
    },
  ],
  set: ({ reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(ntnGameSelector);
      reset(ntnTotalCorrectState);
      reset(ntnTotalAttemptsState);
      reset(ftnGameSelector);
      reset(ftnTotalCorrectState);
      reset(ftnTotalAttemptsState);
    }
  },
});
