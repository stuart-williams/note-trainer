import { DefaultValue, selector } from "recoil";
import { IStats } from "types";
import { percent } from "utils";
import { gameStatsState as fntGameStatsState } from "./find-the-note";
import {
  ntnGameSelector,
  ntnTotalAttemptsState,
  ntnTotalCorrectState,
} from "./name-the-note";

interface GameStats extends IStats {
  game: string;
}

export const gameStatsState = selector<GameStats[]>({
  key: "gameStatsState",
  get: ({ get }) => {
    const { total: findTheNoteStats } = get(fntGameStatsState);

    return [
      // TODO: Refactor
      {
        game: "Name the Note",
        correct: get(ntnTotalCorrectState),
        attempts: get(ntnTotalAttemptsState),
        percent: percent(get(ntnTotalCorrectState), get(ntnTotalAttemptsState)),
      },
      {
        ...findTheNoteStats,
        game: "Find the Note",
      },
    ];
  },
  set: ({ reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(fntGameStatsState);
      // TODO: Refactor
      reset(ntnGameSelector);
      reset(ntnTotalCorrectState);
      reset(ntnTotalAttemptsState);
    }
  },
});
