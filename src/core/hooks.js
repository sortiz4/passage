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
    const inputs = useInputs(React.useState(true));
    return [
        state.current,
        React.useCallback(
            updater => {
                const [signal, setSignal] = inputs.current;
                if (typeof updater !== 'function') {
                    Object.assign(state.current, updater);
                } else {
                    updater(state.current);
                }
                setSignal(!signal);
            },
            [state, inputs],
        ),
    ];
}

/**
 * Reduces invalidation by storing inputs in a stable container.
 */
export function useInputs(current) {
    const inputs = React.useRef(current);
    inputs.current = current;
    return inputs;
}

// Module namespace
export const Hooks = {useClassState, useInputs};
