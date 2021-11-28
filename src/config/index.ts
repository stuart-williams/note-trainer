import { IFretboardId, IFretboard } from "types";

export const fretboards: Record<IFretboardId, IFretboard> = {
  "standard-6": {
    fretCount: 12,
    id: "standard-6",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [6, 5, 4, 3, 2, 1].reverse(),
    name: "6 String Guitar - Standard Tuning",
    tuning: ["E", "A", "D", "G", "B", "E"].reverse(),
  },
  "open-e-6": {
    fretCount: 12,
    id: "open-e-6",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [6, 5, 4, 3, 2, 1].reverse(),
    name: "6 String Guitar - Open E",
    tuning: ["E", "B", "E", "G#", "B", "E"].reverse(),
  },
  "standard-4": {
    fretCount: 12,
    id: "standard-4",
    fretMarkers: [3, 5, 7, 9, 12],
    guages: [7, 6, 5, 4].reverse(),
    tuning: ["E", "A", "D", "G"].reverse(),
    name: "4 String Bass - Standard Tuning",
  },
};
