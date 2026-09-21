import { ChangeEvent, ReactNode } from 'react';
import { useAppState } from '../app/app.state';
import { Checkbox, Field, Input, Label } from '../bulma';

export function SectionB(): ReactNode {
  const [state, setState] = useAppState();

  const onLengthChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ length: Number(event.target.value) });
  };

  const onAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ amount: Number(event.target.value) });
  };

  const onExportChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ shouldExport: event.target.checked });
  };

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
