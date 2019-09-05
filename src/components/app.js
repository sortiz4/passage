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
                <Input type="number"/>
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

function Input(props) {
    return (
        <input
            className="input"
            {...props}
        />
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
