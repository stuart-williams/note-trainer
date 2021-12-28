import { IFretboardConfig, IFretboardId, IGameDurationConfig } from "types";

export const fretboards: Record<IFretboardId, IFretboardConfig> = {
  "standard-6": {
    h: 206,
    fretCount: 12,
    id: "standard-6",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [6, 5, 4, 3, 2, 1].reverse(),
    name: "6 String Guitar - Standard Tuning",
    tuning: ["E", "A", "D", "G", "B", "E"].reverse(),
  },
  "e-flat": {
    h: 206,
    fretCount: 12,
    id: "e-flat",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [6, 5, 4, 3, 2, 1].reverse(),
    name: "6 String Guitar - E Flat",
    tuning: ["D#", "G#", "C#", "F#", "A#", "D#"].reverse(),
  },
  "open-e": {
    h: 206,
    fretCount: 12,
    id: "open-e",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [6, 5, 4, 3, 2, 1].reverse(),
    name: "6 String Guitar - Open E",
    tuning: ["E", "B", "E", "G#", "B", "E"].reverse(),
  },
  "dad-gad": {
    h: 206,
    fretCount: 12,
    id: "dad-gad",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [6, 5, 4, 3, 2, 1].reverse(),
    name: "6 String Guitar - Dad-Gad",
    tuning: ["D", "A", "D", "G", "A", "D"].reverse(),
  },
  "standard-7": {
    h: 254,
    fretCount: 12,
    id: "standard-7",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [7, 6, 5, 4, 3, 2, 1].reverse(),
    tuning: ["B", "E", "A", "D", "G", "B", "E"].reverse(),
    name: "7 String Guitar - Standard Tuning",
  },
  "standard-4": {
    h: 188,
    fretCount: 12,
    id: "standard-4",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [7, 6, 5, 4].reverse(),
    tuning: ["E", "A", "D", "G"].reverse(),
    name: "4 String Bass - Standard Tuning",
  },
  "standard-5": {
    h: 206,
    fretCount: 12,
    id: "standard-5",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [8, 7, 6, 5, 4].reverse(),
    tuning: ["B", "E", "A", "D", "G"].reverse(),
    name: "5 String Bass - Standard Tuning",
  },
};

export const gameDurations: IGameDurationConfig[] = [
  {
    label: "30s",
    value: 30000,
  },
  {
    label: "1m",
    value: 60000,
  },
  {
    label: "3m",
    value: 180000,
  },
];
