import { round } from "lodash";

export const percent = (value: number, total: number): number =>
  total > 0 ? round((value / total) * 100) : 0;
