import {React} from 'core/react';
import {classNames} from 'core/string';

export function App() {
    const colors = ['link', 'info', 'primary', 'success', 'warning', 'danger'];
    const [index, setIndex] = React.useState(0);
    const color = colors[index % colors.length];
    return (
        <Window color={color}>
            <Box>
                <Title>
                    Passage
                </Title>
                <hr/>
                <Control>
                    <Label>Mode</Label>
                    <Radio>
                        Simple
                    </Radio>
                    <Radio>
                        Advanced
                    </Radio>
                </Control>
                <Label>Options</Label>
                <Checkbox>
                    Uppercase
                </Checkbox>
                <Checkbox>
                    Lowercase
                </Checkbox>
                <Checkbox>
                    Numbers
                </Checkbox>
                <Checkbox>
                    Symbols
                </Checkbox>
                <Field>
                    <Label>Character set</Label>
                    <Input type="text"/>
                </Field>
                <Field>
                    <Label>Password length</Label>
                    <Input type="number"/>
                </Field>
                <Field>
                    <Label>Amount to generate</Label>
                    <Input type="number"/>
                </Field>
                <Checkbox>
                    Save to file
                </Checkbox>
                <Button
                    color={color}
                    onClick={() => setIndex(index + 1)}
                >
                    Generate
                </Button>
            </Box>
        </Window>
    );
}

function Box(props) {
    return (
        <div
            className="box"
            {...props}
        />
    );
}

function Button({color, ...props}) {
    return (
        <button
            className={
                classNames(
                    'button',
                    typeof color === 'string' ? `is-${color}` : null,
                )
            }
            {...props}
        />
    );
}

function Checkbox({children, ...props}) {
    return (
        <label className="checkbox">
            <input type="checkbox"/>
            {children}
        </label>
    );
}

function Control(props) {
    return (
        <div
            className="control"
            {...props}
        />
    );
}

function Field(props) {
    return (
        <div
            className="field"
            {...props}
        />
    );
}

function Input(props) {
    return (
        <input
            className="input"
            {...props}
        />
    );
}

function Label(props) {
    return (
        <label
            className="label"
            {...props}
        />
    );
}

function Radio({children, ...props}) {
    return (
        <label className="radio">
            <input type="radio"/>
            {children}
        </label>
    );
}

function Title({size = 3, children, ...props}) {
    return React.createElement(
        `h${size}`,
        {
            className: classNames('title', `is-${size}`),
            ...props,
        },
        children,
    );
}

function Window({color, ...props}) {
    return (
        <div
            className={
                classNames(
                    'window',
                    typeof color === 'string' ? `is-${color}` : null,
                )
            }
            {...props}
        />
    );
}
