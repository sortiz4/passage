import { ChangeEvent, ReactNode } from 'react';
import { useAppState } from '../app/app.state';
import { Field, Input, Label } from '../bulma';

export function Advanced(): ReactNode {
  const [state, setState] = useAppState();

  const onCharactersChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ characters: event.target.value });
  };

  return (
    <Field>
      <Label>
        Character set
      </Label>
      <Input type="text" defaultValue={state.characters} onChange={onCharactersChange}/>
    </Field>
  );
}
