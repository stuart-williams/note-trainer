import { Note } from "@tonaljs/tonal";
import * as config from "config";
import { flatMap, repeat, times } from "lodash";
import { selector } from "recoil";
import { IFretboardConfig, INote } from "types";
import { fretboardIdState, leftHandedState } from "./settings";

export const fretboardState = selector<IFretboardConfig>({
  key: "fretboardState",
  get: ({ get }) => config.fretboards[get(fretboardIdState)],
});

export const fretboardNotesState = selector<INote[]>({
  key: "fretboardNotesState",
  get: ({ get }) => {
    const fretboard = get(fretboardState);
    const leftHanded = get(leftHandedState);

    return flatMap(fretboard.tuning, (note, i) =>
      times(fretboard.fretCount + 1).map((steps) => {
        const id = note + repeat(leftHanded ? "b" : "#", steps);
        const simple = Note.simplify(id);
        const name = leftHanded ? Note.enharmonic(simple) : simple;

        return {
          id,
          name,
          string: i + 1,
        };
      })
    );
  },
});
