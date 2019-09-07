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
import {React} from 'core/react';

export function Root() {
    const colors = ['success', 'warning', 'danger'];
    const [index, setIndex] = React.useState(0);
    const color = colors[index % colors.length];
    return (
        <Window color={color}>
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
                        min={1}
                        max={Number.MAX_SAFE_INTEGER}
                        defaultValue={16}
                    />
                </Field>
                <Field>
                    <Label>Passwords to generate</Label>
                    <Input
                        type="number"
                        min={1}
                        max={Number.MAX_SAFE_INTEGER}
                        defaultValue={1}
                    />
                </Field>
                <Field>
                    <Checkbox>
                        Save to file
                    </Checkbox>
                </Field>
                <Button
                    color={color}
                    children="Generate"
                    onClick={() => setIndex(index + 1)}
                />
            </Box>
        </Window>
    );
}
