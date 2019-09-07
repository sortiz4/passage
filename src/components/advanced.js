import {Field, Input, Label} from 'components';
import {State} from 'core/models';
import {React} from 'core/react';

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
