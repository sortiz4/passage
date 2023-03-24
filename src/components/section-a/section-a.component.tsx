import { Fragment, ReactElement } from 'react';
import { Advanced } from '../advanced/advanced.component';
import { Mode, useAppState } from '../app/app.state';
import { Simple } from '../simple/simple.component';
import { Control, Label, Radio, Row } from '../../bulma';

export function SectionA(): ReactElement {
  const [state, setState] = useAppState();

  function onToSimple(): void {
    setState({ mode: Mode.Simple });
  }

  function onToAdvanced(): void {
    setState({ mode: Mode.Advanced });
  }

  return (
    <Fragment>
      <Control>
        <Label>
          Mode
        </Label>
        <Row>
          <Radio checked={state.mode === Mode.Simple} onChange={onToSimple}>
            Simple
          </Radio>
          <Radio checked={state.mode === Mode.Advanced} onChange={onToAdvanced}>
            Advanced
          </Radio>
        </Row>
      </Control>
      {state.mode === Mode.Simple ? (
        <Simple/>
      ) : state.mode === Mode.Advanced ? (
        <Advanced/>
      ) : (
        <Fragment/>
      )}
    </Fragment>
  );
}