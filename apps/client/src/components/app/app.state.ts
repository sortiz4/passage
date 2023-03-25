import { createContext, useContext, useReducer } from 'react';
import { getRandom, UnicodeSet } from '../../utils';

export enum Mode {
  Simple,
  Advanced,
}

export interface AppState {
  readonly mode: Mode;
  readonly amount: number;
  readonly length: number;
  readonly characters: string;
  readonly shouldExport: boolean;
  readonly hasUppercase: boolean;
  readonly hasLowercase: boolean;
  readonly hasNumbers: boolean;
  readonly hasSymbols: boolean;
  readonly selection: string[];
  readonly score: number;
  readonly color: string;
}

type AppStateContext = [AppState, (_: Partial<AppState>) => void];

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
const Context = createContext<AppStateContext>(null as unknown as AppStateContext);
export const AppStateConsumer = Context.Consumer;
export const AppStateProvider = Context.Provider;

function createAppState(): AppState {
  return {
    mode: Mode.Simple,
    amount: 1,
    length: 16,
    characters: all,
    shouldExport: false,
    hasUppercase: true,
    hasLowercase: true,
    hasNumbers: true,
    hasSymbols: true,
    selection: [],
    score: 0,
    color: '',
  };
}

function createInitialAppState(): AppState {
  return createNextAppState(createAppState());
}

function createNextAppState(current: AppState): AppState {
  function getSelection(): string[] {
    const set = current.mode === Mode.Simple ? (
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

  const selection = getSelection();
  const score = getScore();
  const color = getColor();

  const next: Partial<AppState> = {
    selection,
    score,
    color,
  };

  return Object.assign({}, current, next);
}

export function createPasswords(state: AppState): string {
  // Get a unique set of selected characters
  const characters = state.selection;

  // Write the password(s) to a string
  const passwords = [];
  for (let i = 0; i < state.amount; i++) {
    const password = [];
    for (let j = 0; j < state.length; j++) {
      password.push(characters[getRandom(0, characters.length - 1)]);
    }
    passwords.push(password.join(''));
  }

  return passwords.join('\n');
}

function setAppState(current: AppState, next: Partial<AppState>): AppState {
  return createNextAppState(Object.assign({}, current, next));
}

export function useAppState(): AppStateContext {
  return useContext(Context);
}

export function useInitialAppState(): AppStateContext {
  return useReducer(setAppState, null, createInitialAppState);
}
