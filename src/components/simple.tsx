import { ChangeEvent, Fragment, ReactElement } from 'react';
import { useAppState } from './app.state';
import { Checkbox, Label, Row } from './bulma';

export function Simple(): ReactElement {
  const [state, setState] = useAppState();

  function onUppercaseChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ hasUppercase: event.target.checked });
  }

  function onLowercaseChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ hasLowercase: event.target.checked });
  }

  function onNumbersChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ hasNumbers: event.target.checked });
  }

  function onSymbolsChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ hasSymbols: event.target.checked });
  }

  return (
    <Fragment>
      <Label>
        Options
      </Label>
      <Row>
        <Checkbox defaultChecked={state.hasUppercase} onChange={onUppercaseChange}>
          Uppercase
        </Checkbox>
        <Checkbox defaultChecked={state.hasLowercase} onChange={onLowercaseChange}>
          Lowercase
        </Checkbox>
      </Row>
      <Row>
        <Checkbox defaultChecked={state.hasNumbers} onChange={onNumbersChange}>
          Numbers
        </Checkbox>
        <Checkbox defaultChecked={state.hasSymbols} onChange={onSymbolsChange}>
          Symbols
        </Checkbox>
      </Row>
    </Fragment>
  );
}
