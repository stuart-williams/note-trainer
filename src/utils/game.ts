import dayjs, { Dayjs } from "dayjs";
import { padStart } from "lodash";
import { useRef, useState } from "react";
import { useInterval } from "react-use";
import { useRecoilValue } from "recoil";
import { gameDurationState } from "state";
import { IGameTimer } from "types";

const pad = (n: number) => padStart(n + "", 2, "0");

const calcRemaining = (expiration: Dayjs): number =>
  Math.max(expiration.diff(dayjs()), 0);

const calcdDisplay = (millis: number): string => {
  const minutes = Math.floor(millis / 1000 / 60);
  const seconds = Math.round((millis / 1000) % 60);
  return `${pad(minutes)}:${pad(seconds)}`;
};

export const useGameTimer = (): IGameTimer => {
  const expiration = useRef<Dayjs>(dayjs());
  const duration = useRecoilValue(gameDurationState);
  const [remaining, setRemaining] = useState(calcRemaining(expiration.current));

  useInterval(
    () => {
      setRemaining(calcRemaining(expiration.current));
    },
    remaining > 0 ? 1000 : null
  );

  return {
    remaining,
    display: calcdDisplay(remaining),
    stop: () => setRemaining(0),
    start: () => {
      expiration.current = dayjs().add(duration, "milliseconds");
      setRemaining(calcRemaining(expiration.current));
    },
  };
};
