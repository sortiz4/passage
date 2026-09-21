import { ChangeEvent, ReactNode } from 'react';
import { useAppState } from '../app/app.state';
import { Checkbox, Field, Label, Row } from '../bulma';

export function Simple(): ReactNode {
  const [state, setState] = useAppState();

  const onUppercaseChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ hasUppercase: event.target.checked });
  };

  const onLowercaseChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ hasLowercase: event.target.checked });
  };

  const onNumbersChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ hasNumbers: event.target.checked });
  };

  const onSymbolsChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ hasSymbols: event.target.checked });
  };

  return (
    <Field>
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
    </Field>
  );
}
