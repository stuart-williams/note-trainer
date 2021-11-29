import { shuffle } from "lodash";
import { atom, DefaultValue, selector } from "recoil";
import { INote } from "types";
import { localStorageEffect } from "utils";
import { fretboardNotesState } from "./fretboard";

export const ntnTotalAttemptsState = atom<number>({
  key: "ntnTotalAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnTotalCorrectState = atom<number>({
  key: "ntnTotalCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnGameAttemptsState = atom<number>({
  key: "ntnGameAttemptsState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

export const ntnGameCorrectState = atom<number>({
  key: "ntnGameCorrectState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

const ntnShuffleIdState = atom<number>({
  key: "ntnShuffleIdState",
  default: 0,
});

const ntnPointerState = atom<number>({
  key: "ntnPointerState",
  default: 0,
});

const ntnNotesQueueState = selector<INote[]>({
  key: "ntnNotesQueueState",
  get: ({ get }) => {
    get(ntnShuffleIdState);
    const notes = get(fretboardNotesState);
    return shuffle(notes);
  },
});

export const ntnActiveNoteState = selector<INote>({
  key: "ntnActiveNoteState",
  get: ({ get }) => {
    const queue = get(ntnNotesQueueState);
    const pointer = get(ntnPointerState);
    return queue[pointer];
  },
});

export const ntnGameSelector = selector<INote>({
  key: "ntnGameSelector",
  get: ({ get }) => get(ntnActiveNoteState),
  set: ({ get, set, reset }, newValue) => {
    const shuffleNotesQueue = () => {
      set(ntnShuffleIdState, get(ntnShuffleIdState) + 1);
      reset(ntnPointerState);
    };

    // Reset game
    if (newValue instanceof DefaultValue) {
      reset(ntnGameAttemptsState);
      reset(ntnGameCorrectState);
      shuffleNotesQueue();
      return;
    }

    const activeNote = get(ntnActiveNoteState);
    const isCorrect = newValue.name === activeNote.name;

    // Update game stats
    set(ntnGameAttemptsState, get(ntnGameAttemptsState) + 1);
    set(ntnGameCorrectState, get(ntnGameCorrectState) + Number(isCorrect));
    set(ntnTotalAttemptsState, get(ntnTotalAttemptsState) + 1);
    set(ntnTotalCorrectState, get(ntnTotalCorrectState) + Number(isCorrect));

    if (!isCorrect) {
      return;
    }

    const notesQueue = get(ntnNotesQueueState);
    const nextPointer = get(ntnPointerState) + 1;

    // Reached the end of the queue so reshuffle and pointer to start of queue
    if (!notesQueue[nextPointer]) {
      shuffleNotesQueue();
      return;
    }

    // Next note
    set(ntnPointerState, nextPointer);
  },
});
