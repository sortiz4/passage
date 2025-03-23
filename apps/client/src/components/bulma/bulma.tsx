import classNames from 'classnames';
import { Children, createElement, ReactElement } from 'react';
import {
  ButtonProps as BaseButtonProps,
  DivProps,
  HeadingProps,
  InputProps,
  LabelProps,
  ProgressProps as BaseProgressProps,
  TextAreaProps,
} from 'react-html-props';

export interface ButtonProps extends BaseButtonProps {
  readonly color?: string;
}

export interface ProgressProps extends BaseProgressProps {
  readonly color?: string;
  readonly value?: number;
}

export interface TitleProps extends HeadingProps {
  readonly centered?: boolean;
  readonly size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface WindowProps extends DivProps {
  readonly color?: string;
}

function getColorClass(color?: string): string | null {
  return typeof color === 'string' ? `is-${color}` : null;
}

export function Input({ ref, ...props }: InputProps): ReactElement {
  return (
    <input className="input" ref={ref} {...props}/>
  );
}

export function TextArea({ ref, ...props }: TextAreaProps): ReactElement {
  return (
    <textarea className="textarea" ref={ref} {...props}/>
  );
}

export function Box(props: DivProps): ReactElement {
  return (
    <div className="box m-4" {...props}/>
  );
}

export function Button({ color, ...props }: ButtonProps): ReactElement {
  return (
    <button
      className={classNames('button', getColorClass(color))}
      {...props}
    />
  );
}

export function Checkbox({ children, ...props }: InputProps): ReactElement {
  return (
    <label className="checkbox control">
      <input type="checkbox" {...props}/>
      {children}
    </label>
  );
}

export function Control(props: DivProps): ReactElement {
  return (
    <div className="control" {...props}/>
  );
}

export function Field(props: DivProps): ReactElement {
  return (
    <div className="field" {...props}/>
  );
}

export function Group(props: DivProps): ReactElement {
  return (
    <div className="is-grouped" {...props}/>
  );
}

export function Label(props: LabelProps): ReactElement {
  return (
    <label className="label" {...props}/>
  );
}

export function Progress({ value = 0, color, ...props }: ProgressProps): ReactElement {
  return (
    <progress className={classNames('progress', getColorClass(color))} value={value} max="1" {...props}>
      {Math.round(value * 100)}%
    </progress>
  );
}

export function Radio({ children, ...props }: InputProps): ReactElement {
  return (
    <label className="radio">
      <input type="radio" {...props}/>
      {children}
    </label>
  );
}

export function Row({ children, ...props }: DivProps): ReactElement {
  return (
    <div className="row" {...props}>
      {Children.map(children, child => <div>{child}</div>)}
    </div>
  );
}

export function Title({ size = 3, centered = false, children, ...props }: TitleProps): ReactElement {
  return createElement(
    `h${size}`,
    {
      className: classNames('title', `is-${size}`, centered && 'has-text-centered'),
      ...props,
    },
    children,
  );
}

export function Window({ color, ...props }: WindowProps): ReactElement {
  return (
    <div
      className={classNames('window', getColorClass(color))}
      {...props}
    />
  );
}
