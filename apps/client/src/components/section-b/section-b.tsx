import { ChangeEvent, ReactElement } from 'react';
import { useAppState } from '../app/app.state';
import { Checkbox, Field, Input, Label } from '../bulma/bulma';

export function SectionB(): ReactElement {
  const [state, setState] = useAppState();

  function onLengthChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ length: Number(event.target.value) });
  }

  function onAmountChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ amount: Number(event.target.value) });
  }

  function onExportChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ shouldExport: event.target.checked });
  }

  return (
    <>
      <Field>
        <Label>
          Password length
        </Label>
        <Input type="number" min={1} max={Number.MAX_SAFE_INTEGER} defaultValue={state.length} onChange={onLengthChange}/>
      </Field>
      <Field>
        <Label>
          Passwords to generate
        </Label>
        <Input type="number" min={1} max={Number.MAX_SAFE_INTEGER} defaultValue={state.amount} onChange={onAmountChange}/>
      </Field>
      <Field>
        <Checkbox defaultChecked={state.shouldExport} onChange={onExportChange}>
          Save to file
        </Checkbox>
      </Field>
    </>
  );
}
