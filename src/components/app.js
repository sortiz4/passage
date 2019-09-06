import {
    Box,
    Button,
    Checkbox,
    Control,
    Field,
    Input,
    Label,
    Radio,
    Title,
    Window,
} from 'components';
import {Children, Fragment, React} from 'core/react';

export function App() {
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

export function Mode() {
    const [mode, setMode] = React.useState(0);
    const SIMPLE = 0, ADVANCED = 1;
    return (
        <Fragment>
            <Control>
                <Label>
                    Mode
                </Label>
                <Row>
                    <Radio
                        children="Simple"
                        checked={mode === SIMPLE}
                        onClick={() => setMode(SIMPLE)}
                    />
                    <Radio
                        children="Advanced"
                        checked={mode === ADVANCED}
                        onClick={() => setMode(ADVANCED)}
                    />
                </Row>
            </Control>
            {mode === SIMPLE ? (
                <Simple/>
            ) : mode === ADVANCED ? (
                <Advanced/>
            ) : (
                null
            )}
        </Fragment>
    );
}

export function Simple() {
    return (
        <Fragment>
            <Label>
                Options
            </Label>
            <Row>
                <Checkbox defaultChecked={true}>
                    Uppercase
                </Checkbox>
                <Checkbox defaultChecked={true}>
                    Lowercase
                </Checkbox>
            </Row>
            <Row>
                <Checkbox defaultChecked={true}>
                    Numbers
                </Checkbox>
                <Checkbox defaultChecked={true}>
                    Symbols
                </Checkbox>
            </Row>
        </Fragment>
    );
}

export function Advanced() {
    return (
        <Field>
            <Label>Character set</Label>
            <Input type="text"/>
        </Field>
    );
}

export function Row({children, ...props}) {
    return (
        <div
            children={
                Children.map(
                    children,
                    child => (
                        <div>
                            {child}
                        </div>
                    ),
                )
            }
            className="row"
            {...props}
        />
    );
}
