import { ChangeEvent, ReactElement } from 'react';
import { useAppState } from '../app/app.state';
import { Field, Input, Label } from '../bulma/bulma';

export function Advanced(): ReactElement {
  const [state, setState] = useAppState();

  function onCharactersChange(event: ChangeEvent<HTMLInputElement>): void {
    setState({ characters: event.target.value });
  }

  return (
    <Field>
      <Label>
        Character set
      </Label>
      <Input type="text" defaultValue={state.characters} onChange={onCharactersChange}/>
    </Field>
  );
}
