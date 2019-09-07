import {Core} from 'components';
import {Hooks} from 'core/hooks';
import {State} from 'core/models';
import {React} from 'core/react';

export function App() {
    const [state, setState] = Hooks.useClassState(State);
    return (
        <State.Context.Provider value={[state, setState]}>
            <Core/>
        </State.Context.Provider>
    );
}
