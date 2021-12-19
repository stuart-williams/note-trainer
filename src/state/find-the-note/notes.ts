import { filter } from "lodash";
import { atom, DefaultValue, selector } from "recoil";
import { shuffle } from "shuffle-seed";
import { fretboardNotesState } from "state";
import { INote } from "types";
import { getNoteNames, localStorageEffect } from "utils";

/**
 * Seed for queue shuffling.
 */
const seedState = atom<number>({
  key: "find-the-note/seedState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect(Math.random())],
});

/**
 * Maintain a queue for a consistent spread of notes.
 */
const queueState = selector<string[]>({
  key: "find-the-note/queueState",
  get: ({ get }) => shuffle(getNoteNames(), get(seedState)),
});

/**
 * Pointer to the current note in the queue.
 */
const pointerState = atom<number>({
  key: "find-the-note/pointerState",
  default: 0,
  effects_UNSTABLE: [localStorageEffect()],
});

/**
 * Notes the user has selected to be rendered on the fretboard.
 */
export const activeNotesState = atom<INote[]>({
  key: "find-the-note/activeNotesState",
  default: [],
  effects_UNSTABLE: [localStorageEffect()],
});

/**
 * A wrapper around pointerState which handles reshuffling the
 * queue when we reach the end, moving the pointer and clearing the
 * fretboard.
 */
export const pointerProxySelector = selector<number>({
  key: "find-the-note/pointerProxySelector",
  get: ({ get }) => get(pointerState),
  set: ({ get, set, reset }, newValue) => {
    const queue = get(queueState);

    if (newValue instanceof DefaultValue || !queue[newValue]) {
      // Reshuffle queue and point to the start
      reset(pointerState);
      set(seedState, get(seedState) + Math.random());
    } else {
      // Move pointer to next note
      set(pointerState, newValue);
    }

    // Clear fretboard
    reset(activeNotesState);
  },
});

/**
 * Current game note.
 */
export const targetNoteState = selector<string>({
  key: "find-the-note/targetNoteState",
  get: ({ get }) => get(queueState)[get(pointerState)],
});

/**
 * Number of times the target note appears on the fretboard.
 */
export const targetNoteCountState = selector<number>({
  key: "find-the-note/targetNoteCountState",
  get: ({ get }) =>
    filter(get(fretboardNotesState), ["name", get(targetNoteState)]).length,
});
