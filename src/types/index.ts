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

export type IFretboardId = "standard-6" | "standard-4" | "open-e-6";

export type IHalfNotes = "random" | "sharps" | "flats";

export interface IFretboard {
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
