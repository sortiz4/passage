import { createContext, useContext, useReducer } from 'react';
import { UnicodeSet } from '../../common/utilities';

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
const colors = ['danger', 'warning', 'success'] as const;

// Character sets
const uppercase = `${new UnicodeSet(65, 91)}`;
const lowercase = uppercase.toLowerCase();
const numbers = `${new UnicodeSet(48, 58)}`;
const symbols = `${new UnicodeSet(33, 127).exclude(uppercase, lowercase, numbers)}`;
const all = symbols + numbers + uppercase + lowercase;

// Context components
const Context = createContext<AppStateContext>([createDefaultAppState(), () => undefined]);
export const AppStateConsumer = Context.Consumer;
export const AppStateProvider = Context.Provider;

function createDefaultAppState(): AppState {
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

export function useAppState(): AppStateContext {
  return useContext(Context);
}

export function useNewAppState(): AppStateContext {
  function reducer(current: AppState, next: Partial<AppState>): AppState {
    return createNextAppState(Object.assign({}, current, next));
  }

  function initializer(): AppState {
    return createNextAppState(createDefaultAppState());
  }

  return useReducer(reducer, null, initializer);
}
