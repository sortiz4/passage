import {React} from 'core/react';

/**
 * Constructs the state once and mutates the state on subsequent updates.
 */
export function useClassState(constructor, initial) {
    const state = React.useRef(
        React.useMemo(
            () => Object.assign(new constructor(), initial),
            [constructor, initial],
        )
    );
    const [_, setState] = React.useReducer(
        (prevState, updater) => {
            if(typeof updater !== 'function') {
                Object.assign(state.current, updater);
            } else {
                updater(state.current);
            }
            return !prevState;
        },
        true,
    );
    return [state.current, setState];
}

// Module namespace
export const Hooks = {useClassState};
