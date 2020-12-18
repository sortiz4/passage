import { Checkbox, Field, Input, Label } from 'components';
import { Fragment, React } from 'core/react';
import { State } from 'core/states';

export function SectionB() {
  const [state, setState] = State.useState();

  function onLengthChange(event) {
    setState({ length: Number(event.target.value) });
  }

  function onAmountChange(event) {
    setState({ amount: Number(event.target.value) });
  }

  function onExportChange(event) {
    setState({ export: event.target.checked });
  }

  return (
    <Fragment>
      <Field>
        <Label>Password length</Label>
        <Input
          type="number"
          min={1}
          max={Number.MAX_SAFE_INTEGER}
          defaultValue={state.length}
          onChange={onLengthChange}
        />
      </Field>
      <Field>
        <Label>Passwords to generate</Label>
        <Input
          type="number"
          min={1}
          max={Number.MAX_SAFE_INTEGER}
          defaultValue={state.amount}
          onChange={onAmountChange}
        />
      </Field>
      <Field>
        <Checkbox
          children="Save to file"
          defaultChecked={state.export}
          onChange={onExportChange}
        />
      </Field>
    </Fragment>
  );
}
