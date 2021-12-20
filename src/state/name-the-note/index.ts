import { DefaultValue, selector } from "recoil";
import { INote } from "types";
import { pointerProxySelector, targetNoteState } from "./notes";
import { statProxySelector } from "./statistics";

export const gameProxySelector = selector<INote>({
  key: "name-the-note/gameProxySelector",
  get: ({ get }) => get(targetNoteState),
  set: ({ get, set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      // Reset stats
      reset(statProxySelector);
      // Reset game
      reset(pointerProxySelector);
      return;
    }

    const isCorrect = newValue.name === get(targetNoteState).name;

    // Update attempt stat
    set(statProxySelector, isCorrect);

    if (isCorrect) {
      // Move on to the next note
      set(pointerProxySelector, get(pointerProxySelector) + 1);
    }
  },
});

export * from "./notes";
export * from "./statistics";
