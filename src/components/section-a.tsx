import { Fragment, ReactElement } from 'react';
import { Advanced } from './advanced';
import { Control, Label, Radio, Row } from './bulma';
import { Simple } from './simple';
import { useAppState } from '../states/app';

export function SectionA(): ReactElement {
  const [appState, setAppState] = useAppState();

  function onToSimple(): void {
    setAppState(appState.toSimple());
  }

  function onToAdvanced(): void {
    setAppState(appState.toAdvanced());
  }

  return (
    <Fragment>
      <Control>
        <Label>
          Mode
        </Label>
        <Row>
          <Radio checked={appState.isSimple} onChange={onToSimple}>
            Simple
          </Radio>
          <Radio checked={appState.isAdvanced} onChange={onToAdvanced}>
            Advanced
          </Radio>
        </Row>
      </Control>
      {appState.isSimple ? (
        <Simple/>
      ) : appState.isAdvanced ? (
        <Advanced/>
      ) : (
        void 0
      )}
    </Fragment>
  );
}
