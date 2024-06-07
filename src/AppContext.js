import { createContext } from 'react';

export const character = {
  sex: null,
  race: null,
  profession: null,
  hasBegin: false,
  toggleHasBegin: () => {},
  toggleAnswer: () => {},
  toggleReset: () => {},
};

export const CharacterContext = createContext();
