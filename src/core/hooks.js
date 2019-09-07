import {React} from 'core/react';

export function useClassState(constructor, initial) {
    return React.useReducer(
        (state, update) => Object.assign(new constructor(), state, update),
        React.useMemo(() => new constructor(initial), [constructor, initial]),
    );
}

export const Hooks = {useClassState};
