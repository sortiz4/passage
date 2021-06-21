import { ChangeEvent, ReactElement } from 'react';
import { Field, Input, Label } from './bulma';
import { useAppState } from '../states/app';

export function Advanced(): ReactElement {
  const [appState, setAppState] = useAppState();

  function onCharactersChange(event: ChangeEvent<HTMLInputElement>): void {
    setAppState({ characters: event.target.value });
  }

  return (
    <Field>
      <Label>
        Character set
      </Label>
      <Input type="text" defaultValue={appState.characters} onChange={onCharactersChange}/>
    </Field>
  );
}
