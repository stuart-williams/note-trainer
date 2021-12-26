interface PageViewEvent {
  event: "virtualPageView";
  pageTitle: string;
  pageLocation: string;
}

declare global {
  interface Window {
    dataLayer: PageViewEvent[];
  }
}

export type IBinary = 0 | 1;

export type IFretboardId =
  | "e-flat"
  | "open-e"
  | "dad-gad"
  | "standard-4"
  | "standard-5"
  | "standard-6"
  | "standard-7";

export type IHalfNotes = "random" | "sharps" | "flats";

export interface IFretboard {
  h: number;
  id: IFretboardId;
  name: string;
  tuning: string[];
  guages: number[];
  fretCount: number;
  fretMarkers: number[];
}

export interface INote {
  id: string;
  name: string;
  string: number;
  displayName?: string;
}

export interface IStats {
  percent: number;
  correct: number;
  attempts: number;
}

export interface IGameStats {
  game: IStats;
  total: IStats;
}
