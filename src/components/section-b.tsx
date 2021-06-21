import { ChangeEvent, Fragment, ReactElement } from 'react';
import { Checkbox, Field, Input, Label } from './bulma';
import { useAppState } from '../states/app';

export function SectionB(): ReactElement {
  const [appState, setAppState] = useAppState();

  function onLengthChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ length: Number(event.target.value) });
  }

  function onAmountChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ amount: Number(event.target.value) });
  }

  function onExportChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ shouldExport: event.target.checked });
  }

  return (
    <Fragment>
      <Field>
        <Label>
          Password length
        </Label>
        <Input type="number" min={1} max={Number.MAX_SAFE_INTEGER} defaultValue={appState.length} onChange={onLengthChange}/>
      </Field>
      <Field>
        <Label>
          Passwords to generate
        </Label>
        <Input type="number" min={1} max={Number.MAX_SAFE_INTEGER} defaultValue={appState.amount} onChange={onAmountChange}/>
      </Field>
      <Field>
        <Checkbox defaultChecked={appState.shouldExport} onChange={onExportChange}>
          Save to file
        </Checkbox>
      </Field>
    </Fragment>
  );
}
