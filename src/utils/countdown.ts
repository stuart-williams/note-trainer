import dayjs, { Dayjs } from "dayjs";
import { identity, padStart } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "react-use";

const pad = (n: number): string => padStart(n + "", 2, "0");

const calcRemaining = (expiration: Dayjs): number =>
  Math.max(expiration.diff(dayjs()), 0);

const formatRemaining = (remaining: number): string =>
  pad(Math.floor(remaining / 1000 / 60)) +
  ":" +
  pad(Math.floor(remaining / 1000) % 60);

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
  const isRunning = useRef(false);
  const expiration = useRef<Dayjs>(dayjs());
  const onCountdownEnd = useRef<() => void>(identity);
  const [remaining, setRemaining] = useState(calcRemaining(expiration.current));

  useInterval(
    () => {
      setRemaining(calcRemaining(expiration.current));
    },
    remaining > 0 ? 1000 : null
  );

  useEffect(() => {
    if (isRunning.current && !remaining) {
      isRunning.current = false;
      onCountdownEnd.current();
    }
  }, [remaining]);

  return {
    isRunning: isRunning.current,
    remaining: {
      millis: remaining,
      seconds: Math.round(remaining / 1000),
      formatted: formatRemaining(remaining),
    },
    start: (duration: number, callback: () => void = identity) => {
      onCountdownEnd.current = callback;
      isRunning.current = true;
      expiration.current = dayjs().add(duration, "milliseconds");
      setRemaining(calcRemaining(expiration.current));
    },
    stop: () => {
      isRunning.current = false;
      setRemaining(0);
    },
  };
};
