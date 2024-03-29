import { Fragment, MutableRefObject, ReactElement, useRef, useState } from 'react';
import { useAppState } from '../app/app.state';
import { Button, Field, Group, Input, Label, TextArea } from '../bulma/bulma';
import { createDownload, getRandom } from '../../utils';

export function SectionC(): ReactElement {
  const [passwords, setPasswords] = useState('');
  const state = useAppState()[0];
  const input = useRef<HTMLInputElement | HTMLTextAreaElement>();

  function getPasswords(): string {
    const characters = state.selection;

    function getCharacter(): string {
      return characters[getRandom(0, characters.length - 1)];
    }

    function getPassword(): string {
      return Array(state.length).fill(undefined).map(getCharacter).join('');
    }

    return Array(state.amount).fill(undefined).map(getPassword).join('\n');
  }

  function onGenerate(): void {
    const list = getPasswords();

    if (state.shouldExport) {
      createDownload(`${document.title}.txt`.toLowerCase(), list);
    }

    setPasswords(list);
  }

  function onCopy(): void {
    input.current?.select?.();
    document.execCommand('copy');
  }

  function onDelete(): void {
    setPasswords('');
  }

  return (
    <Fragment>
      <Field>
        <Button color={state.color} onClick={onGenerate}>
          Generate
        </Button>
      </Field>
      {!state.shouldExport && passwords.length > 0 ? (
        <Fragment>
          <Field>
            <Label>
              Result
            </Label>
            {state.amount > 1 ? (
              <TextArea readOnly ref={input as MutableRefObject<HTMLTextAreaElement>} value={passwords}/>
            ) : (
              <Input readOnly type="text" ref={input as MutableRefObject<HTMLInputElement>} value={passwords}/>
            )}
          </Field>
          <Group>
            <Button color={state.color} onClick={onCopy}>
              Copy
            </Button>
            <Button color="light" onClick={onDelete}>
              Delete
            </Button>
          </Group>
        </Fragment>
      ) : (
        <Fragment/>
      )}
    </Fragment>
  );
}
