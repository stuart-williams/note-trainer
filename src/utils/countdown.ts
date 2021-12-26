import dayjs, { Dayjs } from "dayjs";
import { identity, padStart } from "lodash";
import { useRef, useState } from "react";
import { useInterval } from "react-use";

const pad = (n: number): string => padStart(n + "", 2, "0");

const calcRemaining = (expiration: Dayjs): number =>
  Math.max(expiration.diff(dayjs()), 0);

const formatRemaining = (remaining: number): string =>
  pad(Math.floor(remaining / 60000)) +
  ":" +
  pad(Math.ceil(remaining / 1000) % 60);

interface Countdown {
  remaining: {
    millis: number;
    seconds: number;
    formatted: string;
  };
  stop: () => void;
  isRunning: boolean;
  start: (duration: number, onCountdownEnd?: () => void) => void;
}

export const useCountdown = (): Countdown => {
  const expiration = useRef<Dayjs>(dayjs());
  const onCountdownEnd = useRef<() => void>(identity);
  const [remaining, setRemaining] = useState(calcRemaining(expiration.current));

  useInterval(
    () => {
      const newRemaining = calcRemaining(expiration.current);

      if (!newRemaining) {
        onCountdownEnd.current();
      }

      setRemaining(newRemaining);
    },
    remaining > 0 ? 1000 : null
  );

  return {
    isRunning: remaining > 0,
    remaining: {
      millis: remaining,
      seconds: Math.round(remaining / 1000),
      formatted: formatRemaining(remaining),
    },
    start: (duration: number, callback: () => void = identity) => {
      onCountdownEnd.current = callback;
      expiration.current = dayjs().add(duration, "milliseconds");
      setRemaining(calcRemaining(expiration.current));
    },
    stop: () => setRemaining(0),
  };
};
