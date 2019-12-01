import {Field, Input, Label} from 'components';
import {React} from 'core/react';
import {State} from 'core/states';

export function Advanced() {
    const [state, setState] = React.useContext(State.Context);
    const onCharactersChange = event => {
        setState({characters: event.target.value});
    };
    return (
        <Field>
            <Label>Character set</Label>
            <Input
                type="text"
                defaultValue={state.characters}
                onChange={onCharactersChange}
            />
        </Field>
    );
}
