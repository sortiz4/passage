import { ReactNode } from 'react';
import { Advanced } from '../advanced';
import { Mode, useAppState } from '../app/app.state';
import { Control, Field, Label, Radio, Row } from '../bulma';
import { Simple } from '../simple';

export function SectionA(): ReactNode {
  const [state, setState] = useAppState();

  const onToSimple = (): void => {
    setState({ mode: Mode.Simple });
  };

  const onToAdvanced = (): void => {
    setState({ mode: Mode.Advanced });
  };

  return (
    <>
      <Field>
        <Label>
          Mode
        </Label>
        <Control>
          <Row>
            <Radio checked={state.mode === Mode.Simple} onChange={onToSimple}>
              Simple
            </Radio>
            <Radio checked={state.mode === Mode.Advanced} onChange={onToAdvanced}>
              Advanced
            </Radio>
          </Row>
        </Control>
      </Field>
      {state.mode === Mode.Simple ? (
        <Simple/>
      ) : state.mode === Mode.Advanced ? (
        <Advanced/>
      ) : (
        null
      )}
    </>
  );
}
