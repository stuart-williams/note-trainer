import { Note } from "@tonaljs/tonal";
import * as ls from "local-storage";
import { repeat, round, times } from "lodash";
import { AtomEffect, DefaultValue } from "recoil";

export const localStorageEffect =
  <T,>(): AtomEffect<T> =>
  ({ node, setSelf, onSet }) => {
    const key = `noteTrainer.${node.key}`;
    const value = ls.get<T>(key);

    if (value) {
      setSelf(value);
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        ls.remove(key);
      } else {
        ls.set<T>(key, newValue);
      }
    });
  };

export const getNoteNames = (): string[] =>
  times(12).map((sharps) => Note.simplify("C" + repeat("#", sharps)));

export const percent = (value: number, total: number): number =>
  total > 0 ? round((value / total) * 100) : 0;
