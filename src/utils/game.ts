import dayjs, { Dayjs } from "dayjs";
import { padStart } from "lodash";
import { useRef, useState } from "react";
import { useInterval } from "react-use";
import { useRecoilValue } from "recoil";
import { gameDurationState } from "state";
import { IGameTimer } from "types";

const pad = (n: number): string => padStart(n + "", 2, "0");

const calcRemaining = (expiration: Dayjs): number =>
  Math.max(expiration.diff(dayjs()), 0);

const calcdDisplay = (remaining: number): string =>
  pad(Math.floor(remaining / 1000 / 60)) +
  ":" +
  pad(Math.floor(remaining / 1000) % 60);

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
    isRunning: remaining > 0,
    display: calcdDisplay(remaining),
    stop: () => setRemaining(0),
    start: () => {
      expiration.current = dayjs().add(duration, "milliseconds");
      setRemaining(calcRemaining(expiration.current));
    },
  };
};
