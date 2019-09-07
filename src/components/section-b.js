import {Checkbox, Field, Input, Label} from 'components';
import {State} from 'core/models';
import {Fragment, React} from 'core/react';

export function SectionB() {
    const [state, setState] = React.useContext(State.Context);
    const onLengthChange = event => {
        setState({length: Number(event.target.value)});
    };
    const onAmountChange = event => {
        setState({amount: Number(event.target.value)});
    };
    const onExportChange = event => {
        setState({export: event.target.checked});
    };
    return (
        <Fragment>
            <Field>
                <Label>Password length</Label>
                <Input
                    type="number"
                    defaultValue={state.length}
                    min={1}
                    max={Number.MAX_SAFE_INTEGER}
                    onChange={onLengthChange}
                />
            </Field>
            <Field>
                <Label>Passwords to generate</Label>
                <Input
                    type="number"
                    defaultValue={state.amount}
                    min={1}
                    max={Number.MAX_SAFE_INTEGER}
                    onChange={onAmountChange}
                />
            </Field>
            <Field>
                <Checkbox
                    children="Save to file"
                    defaultChecked={state.export}
                    onChange={onExportChange}
                />
            </Field>
        </Fragment>
    );
}
