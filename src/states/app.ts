import { createContext, useContext, useReducer } from 'react';
import { getRandom, UnicodeSet } from '../utils';

enum AppStateMode {
  Simple,
  Advanced,
}

interface AppState {
  readonly mode: AppStateMode;
  readonly amount: number;
  readonly length: number;
  readonly characters: string;
  readonly shouldExport: boolean;
  readonly hasUppercase: boolean;
  readonly hasLowercase: boolean;
  readonly hasNumbers: boolean;
  readonly hasSymbols: boolean;
  readonly isSimple: boolean;
  readonly isAdvanced: boolean;
  readonly selection: string[];
  readonly score: number;
  readonly color: string;
  toSimple(): Partial<AppState>;
  toAdvanced(): Partial<AppState>;
  createPasswords(): string;
}

type AppStateContextValue = [AppState, (_: Partial<AppState>) => void];

// State values
const optionCeiling = 94;
const lengthCeiling = 16;
const colors = ['danger', 'warning', 'success'];

// Character sets
const uppercase = `${new UnicodeSet(65, 91)}`;
const lowercase = uppercase.toLowerCase();
const numbers = `${new UnicodeSet(48, 58)}`;
const symbols = `${new UnicodeSet(33, 127).exclude(uppercase, lowercase, numbers)}`;
const all = symbols + numbers + uppercase + lowercase;

// Context components
const AppStateContext = createContext<AppStateContextValue>(null as unknown as AppStateContextValue);
export const AppStateConsumer = AppStateContext.Consumer;
export const AppStateProvider = AppStateContext.Provider;

function createAppState(): AppState {
  return {
    mode: AppStateMode.Simple,
    amount: 1,
    length: 16,
    characters: all,
    shouldExport: false,
    hasUppercase: true,
    hasLowercase: true,
    hasNumbers: true,
    hasSymbols: true,
    isSimple: false,
    isAdvanced: false,
    selection: [],
    score: 0,
    color: '',

    toSimple(): Partial<AppState> {
      return { mode: AppStateMode.Simple };
    },

    toAdvanced(): Partial<AppState> {
      return { mode: AppStateMode.Advanced };
    },

    createPasswords(): string {
      // Get a unique set of selected characters
      const characters = this.selection;

      // Write the password(s) to a string
      const passwords = [];
      for (let i = 0; i < this.amount; i++) {
        const password = [];
        for (let j = 0; j < this.length; j++) {
          password.push(characters[getRandom(0, characters.length - 1)]);
        }
        passwords.push(password.join(''));
      }
      return passwords.join('\n');
    },
  };
}

function createInitialAppState(): AppState {
  return createNextAppState(createAppState());
}

function createNextAppState(current: AppState): AppState {
  function getSelection(): string[] {
    const set = isSimple ? (
      (current.hasUppercase ? uppercase : '') +
      (current.hasLowercase ? lowercase : '') +
      (current.hasNumbers ? numbers : '') +
      (current.hasSymbols ? symbols : '')
    ) : (
      current.characters
    );
    return Array.from(new Set(set));
  }

  function getScore(): number {
    // Score the password options
    const optionScore = selection.length / optionCeiling;

    // Score the password length
    const lengthScore = current.length / lengthCeiling;

    // Compute the score
    return optionScore * lengthScore;
  }

  function getColor(): string {
    const length = colors.length - 1;
    const offset = score * length;
    return colors[Math.min(Math.trunc(offset), length)];
  }

  const isSimple = current.mode === AppStateMode.Simple;
  const isAdvanced = current.mode === AppStateMode.Advanced;
  const selection = getSelection();
  const score = getScore();
  const color = getColor();

  const next = {
    isSimple,
    isAdvanced,
    selection,
    score,
    color,
  };

  return Object.assign({}, current, next);
}

function setAppState(current: AppState, next: Partial<AppState>): AppState {
  return createNextAppState(Object.assign({}, current, next));
}

export function useAppState(): AppStateContextValue {
  return useContext(AppStateContext);
}

export function useInitialAppState(): AppStateContextValue {
  return useReducer(setAppState, null, createInitialAppState);
}
