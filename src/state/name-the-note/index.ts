import { DefaultValue, selector } from "recoil";
import { IBinary, INote } from "types";
import { answerIndicatorState } from "..";
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

    // Indicate answer correctness
    set(answerIndicatorState, Number(isCorrect) as IBinary);

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
