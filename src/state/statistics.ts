import { DefaultValue, selector } from "recoil";
import { IStats } from "types";
import { gameStatsState as fntGameStatsState } from "./find-the-note";
import { gameStatsState as ntnGameStatsState } from "./name-the-note";

interface GameStats extends IStats {
  game: string;
}

export const gameStatsState = selector<GameStats[]>({
  key: "gameStatsState",
  get: ({ get }) => {
    const { total: ntnStats } = get(ntnGameStatsState);
    const { total: ftnStats } = get(fntGameStatsState);

    return [
      {
        game: "Name the Note",
        ...ntnStats,
      },
      {
        ...ftnStats,
        game: "Find the Note",
      },
    ];
  },
  set: ({ reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(ntnGameStatsState);
      reset(fntGameStatsState);
    }
  },
});
