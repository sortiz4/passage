import {Field, Input, Label} from 'components';
import {React} from 'core/react';

export function Advanced() {
    return (
        <Field>
            <Label>Character set</Label>
            <Input type="text"/>
        </Field>
    );
}
