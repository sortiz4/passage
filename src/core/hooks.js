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
    const params = useParams(React.useState(true));
    return [
        state.current,
        React.useCallback(
            updater => {
                console.log('set state called');
                const [signal, setSignal] = params.current;
                if(typeof updater !== 'function') {
                    Object.assign(state.current, updater);
                } else {
                    updater(state.current);
                }
                setSignal(!signal);
            },
            [state, params],
        ),
    ];
}

/**
 * Reduces invalidation by storing parameters in a stable container.
 */
export function useParams(current) {
    const params = React.useRef(current);
    params.current = current;
    return params;
}

// Module namespace
export const Hooks = {useClassState, useParams};
