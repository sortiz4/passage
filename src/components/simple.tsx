import { ChangeEvent, Fragment, ReactElement } from 'react';
import { Checkbox, Label, Row } from './bulma';
import { useAppState } from '../states/app';

export function Simple(): ReactElement {
  const [appState, setAppState] = useAppState();

  function onUppercaseChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ hasUppercase: event.target.checked });
  }

  function onLowercaseChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ hasLowercase: event.target.checked });
  }

  function onNumbersChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ hasNumbers: event.target.checked });
  }

  function onSymbolsChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ hasSymbols: event.target.checked });
  }

  return (
    <Fragment>
      <Label>
        Options
      </Label>
      <Row>
        <Checkbox defaultChecked={appState.hasUppercase} onChange={onUppercaseChange}>
          Uppercase
        </Checkbox>
        <Checkbox defaultChecked={appState.hasLowercase} onChange={onLowercaseChange}>
          Lowercase
        </Checkbox>
      </Row>
      <Row>
        <Checkbox defaultChecked={appState.hasNumbers} onChange={onNumbersChange}>
          Numbers
        </Checkbox>
        <Checkbox defaultChecked={appState.hasSymbols} onChange={onSymbolsChange}>
          Symbols
        </Checkbox>
      </Row>
    </Fragment>
  );
}
