import { atom, DefaultValue, selector } from "recoil";
import { IGameStats } from "types";
import { localStorageEffect, percent } from "utils";

const totalAttemptsState = atom<number>({
  key: "name-the-note/totalAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

const totalCorrectState = atom<number>({
  key: "name-the-note/totalCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

const gameAttemptsState = atom<number>({
  key: "name-the-note/gameAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

const gameCorrectState = atom<number>({
  key: "name-the-note/gameCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const statProxySelector = selector<boolean>({
  key: "name-the-note/statProxySelector",
  get: () => true,
  set: ({ get, set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(gameCorrectState);
      reset(gameAttemptsState);
    } else {
      set(gameAttemptsState, get(gameAttemptsState) + 1);
      set(totalAttemptsState, get(totalAttemptsState) + 1);
      set(gameCorrectState, get(gameCorrectState) + Number(newValue));
      set(totalCorrectState, get(totalCorrectState) + Number(newValue));
    }
  },
});

export const gameStatsState = selector<IGameStats>({
  key: "name-the-note/gameStatsState",
  get: ({ get }) => ({
    game: {
      correct: get(gameCorrectState),
      attempts: get(gameAttemptsState),
      percent: percent(get(gameCorrectState), get(gameAttemptsState)),
    },
    total: {
      correct: get(totalCorrectState),
      attempts: get(totalAttemptsState),
      percent: percent(get(totalCorrectState), get(totalAttemptsState)),
    },
  }),
  set: ({ reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(gameCorrectState);
      reset(gameAttemptsState);
      reset(totalCorrectState);
      reset(totalAttemptsState);
    }
  },
});
