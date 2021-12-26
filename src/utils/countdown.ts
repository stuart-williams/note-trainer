import dayjs, { Dayjs } from "dayjs";
import { identity, padStart } from "lodash";
import { useRef, useState } from "react";
import { useInterval } from "react-use";

const pad = (n: number): string => padStart(String(n), 2, "0");

const calcRemaining = (expiration: Dayjs): number =>
  Math.max(expiration.diff(dayjs()), 0);

const formatRemaining = (remaining: number): string =>
  pad(Math.floor(remaining / 60000)) +
  ":" +
  pad(Math.round(remaining / 1000) % 60);

interface Countdown {
  remaining: {
    millis: number;
    seconds: number;
    formatted: string;
  };
  reset: () => void;
  isRunning: boolean;
  start: (duration: number) => void;
}

interface CountdownOptions {
  onExpire?: () => void;
}

export const useCountdown = ({
  onExpire = identity,
}: CountdownOptions = {}): Countdown => {
  const expiration = useRef<Dayjs>(dayjs());
  const [remaining, setRemaining] = useState(0);

  useInterval(
    () => {
      const newValue = calcRemaining(expiration.current);

      if (!newValue) {
        onExpire();
      }

      setRemaining(newValue);
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
    start: (duration: number) => {
      expiration.current = dayjs().add(duration, "milliseconds");
      setRemaining(calcRemaining(expiration.current));
    },
    reset: () => setRemaining(0),
  };
};
