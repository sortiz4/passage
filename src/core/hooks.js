import {React} from 'core/react';

/**
 * Constructs the state on each update (without callbacks).
 */
export function useClassState(constructor, initial) {
    return React.useReducer(
        (state, update) => Object.assign(new constructor(), state, update),
        React.useMemo(
            () => Object.assign(new constructor(), initial),
            [constructor, initial],
        ),
    );
}

// Module namespace
export const Hooks = {useClassState};
