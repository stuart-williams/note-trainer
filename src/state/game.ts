import dayjs from "dayjs";
import { atom, DefaultValue, selector } from "recoil";
import { IBinary } from "types";
import { localStorageEffect } from "utils";

export const answerIndicatorState = atom<-1 | IBinary>({
  key: "answerIndicatorState",
  default: -1,
});

const gameDurationState = atom<30000 | 60000 | 180000>({
  key: "gameDurationState",
  default: 30000,
});

export const gameTickState = atom<number>({
  key: "gameTickState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

const gameEndState = atom<string>({
  key: "gameEndState",
  default: dayjs().format(),
  effects_UNSTABLE: [localStorageEffect()],
});

export const gameRemainingState = selector<number>({
  key: "gameRemainingState",
  get: ({ get }) => {
    get(gameTickState);
    const end = dayjs(get(gameEndState));
    const millis = dayjs(end).diff(dayjs());
    const seconds = Math.max(Math.ceil(millis / 1000), 0);
    return Math.round(seconds);
  },
});

export const gameTickProxySelector = selector<number>({
  key: "gameTickProxySelector",
  get: ({ get }) => get(gameTickState),
  set: ({ get, set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(gameEndState, dayjs().format());
      set(gameTickState, 0);
    } else if (newValue === 1) {
      const duration = get(gameDurationState);
      const end = dayjs().add(duration, "milliseconds").format();
      set(gameEndState, end);
    }

    set(gameTickState, newValue);
  },
});
