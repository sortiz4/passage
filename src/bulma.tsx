import classNames from 'classnames';
import { Children, createElement, ForwardedRef, forwardRef, ReactElement } from 'react';
import {
  ButtonProps as HtmlButtonProps,
  DivProps as HtmlDivProps,
  HeadingProps as HtmlHeadingProps,
  InputProps as HtmlInputProps,
  LabelProps as HtmlLabelProps,
  ProgressProps as HtmlProgressProps,
  TextAreaProps as HtmlTextAreaProps,
} from 'react-html-props';

interface ButtonProps extends HtmlButtonProps {
  color?: string;
}

interface ProgressProps extends HtmlProgressProps {
  color?: string;
  value?: number;
}

interface TitleProps extends HtmlHeadingProps {
  centered?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface WindowProps extends HtmlDivProps {
  color?: string;
}

function getColorClass(color?: string): string | null {
  return typeof color === 'string' ? `is-${color}` : null;
}

export const Input = forwardRef(
  function Input(props: HtmlInputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement {
    return (
      <input className="input" ref={ref} {...props}/>
    );
  },
);

export const TextArea = forwardRef(
  function TextArea(props: HtmlTextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): ReactElement {
    return (
      <textarea className="textarea" ref={ref} {...props}/>
    );
  },
);

export function Box(props: HtmlDivProps): ReactElement {
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

export function Checkbox({ children, ...props }: HtmlInputProps): ReactElement {
  return (
    <label className="checkbox">
      <input type="checkbox" {...props}/>
      {children}
    </label>
  );
}

export function Control(props: HtmlDivProps): ReactElement {
  return (
    <div className="control" {...props}/>
  );
}

export function Field(props: HtmlDivProps): ReactElement {
  return (
    <div className="field" {...props}/>
  );
}

export function Group(props: HtmlDivProps): ReactElement {
  return (
    <div className="is-grouped" {...props}/>
  );
}

export function Label(props: HtmlLabelProps): ReactElement {
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

export function Radio({ children, ...props }: HtmlInputProps): ReactElement {
  return (
    <label className="radio">
      <input type="radio" {...props}/>
      {children}
    </label>
  );
}

export function Row({ children, ...props }: HtmlDivProps): ReactElement {
  return (
    <div
      children={Children.map(children, child => <div>{child}</div>)}
      className="row"
      {...props}
    />
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
