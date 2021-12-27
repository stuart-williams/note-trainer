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

export interface IFretboardConfig {
  h: number;
  id: IFretboardId;
  name: string;
  tuning: string[];
  guages: number[];
  fretCount: number;
  fretMarkers: number[];
}

export type IGameDuration = 30000 | 60000 | 180000;

export interface IGameDurationConfig {
  label: string;
  value: IGameDuration;
}
