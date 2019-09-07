import {Children, React} from 'core/react';
import {classNames} from 'core/string';

export function Box(props) {
    return (
        <div
            className="box"
            {...props}
        />
    );
}

export function Button({color, ...props}) {
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

export function Checkbox({children, ...props}) {
    return (
        <label className="checkbox">
            <input type="checkbox" {...props}/>
            {children}
        </label>
    );
}

export function Control(props) {
    return (
        <div
            className="control"
            {...props}
        />
    );
}

export function Field(props) {
    return (
        <div
            className="field"
            {...props}
        />
    );
}

export function Input(props) {
    return (
        <input
            className="input"
            {...props}
        />
    );
}

export function Label(props) {
    return (
        <label
            className="label"
            {...props}
        />
    );
}

export function Radio({children, ...props}) {
    return (
        <label className="radio">
            <input type="radio" {...props}/>
            {children}
        </label>
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

export function Title({size = 3, centered, children, ...props}) {
    return React.createElement(
        `h${size}`,
        {
            className: classNames(
                'title',
                `is-${size}`,
                centered && 'has-text-centered',
            ),
            ...props,
        },
        children,
    );
}

export function Window({color, ...props}) {
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
