import {
    Box,
    Button,
    Checkbox,
    Field,
    Input,
    Label,
    Mode,
    Title,
    Window,
} from 'components';
import {State} from 'core/models';
import {React} from 'core/react';

export function Root() {
    const [state, setState] = React.useContext(State.Context);
    const onLengthChange = event => {
        setState({length: Number(event.target.value)});
    };
    const onAmountChange = event => {
        setState({amount: Number(event.target.value)});
    };
    return (
        <Window color={state.color}>
            <Box>
                <Title centered>
                    Passage
                </Title>
                <hr/>
                <Mode/>
                <Field>
                    <Label>Password length</Label>
                    <Input
                        type="number"
                        defaultValue={16}
                        min={1}
                        max={Number.MAX_SAFE_INTEGER}
                        onChange={onLengthChange}
                    />
                </Field>
                <Field>
                    <Label>Passwords to generate</Label>
                    <Input
                        type="number"
                        defaultValue={1}
                        min={1}
                        max={Number.MAX_SAFE_INTEGER}
                        onChange={onAmountChange}
                    />
                </Field>
                <Field>
                    <Checkbox>
                        Save to file
                    </Checkbox>
                </Field>
                <Button
                    color={state.color}
                    children="Generate"
                />
            </Box>
        </Window>
    );
}
