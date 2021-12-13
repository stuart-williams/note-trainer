import * as ls from "local-storage";
import { AtomEffect, DefaultValue } from "recoil";

export const localStorageEffect =
  <T>(defaultValue?: T): AtomEffect<T> =>
  ({ node, setSelf, onSet }) => {
    const key = `noteTrainer.${node.key}`;
    const value = ls.get<T>(key);

    if (value !== null) {
      setSelf(value);
    } else if (defaultValue) {
      ls.set<T>(key, defaultValue);
      setSelf(defaultValue);
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        ls.remove(key);
      } else {
        ls.set<T>(key, newValue);
      }
    });
  };
