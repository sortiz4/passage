import { Core } from 'components';
import { Hooks } from 'core/hooks';
import { React } from 'core/react';
import { State } from 'core/states';

export function App() {
    const [state, setState] = Hooks.useClassState(State);
    return (
        <State.Context.Provider value={[state, setState]}>
            <Core/>
        </State.Context.Provider>
    );
}
