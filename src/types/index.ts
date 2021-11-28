export interface INote {
  id: string;
  name: string;
  string: number;
}

export type IFretboardId = "standard-6" | "standard-4";

export interface IFretboard {
  id: IFretboardId;
  name: string;
  tuning: string[];
  guages: number[];
  fretCount: number;
  fretMarkers: number[];
}
