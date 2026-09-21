import { ReactNode, RefObject, useRef, useState } from 'react';
import { useAppState } from '../app/app.state';
import { Button, Field, Group, Input, Label, TextArea } from '../bulma';
import { createDownload, getRandom } from '../../common/utilities';

export function SectionC(): ReactNode {
  const [passwords, setPasswords] = useState('');
  const state = useAppState()[0];
  const input = useRef<HTMLInputElement | HTMLTextAreaElement>(undefined);

  const getPasswords = (): string => {
    const characters = state.selection;

    const getCharacter = (): string => {
      return characters[getRandom(0, characters.length - 1)];
    };

    const getPassword = (): string => {
      return Array(state.length).fill(undefined).map(getCharacter).join('');
    };

    return Array(state.amount).fill(undefined).map(getPassword).join('\n');
  };

  const onGenerate = (): void => {
    const list = getPasswords();

    if (state.shouldExport) {
      createDownload(`${document.title}.txt`.toLowerCase(), list);
    }

    setPasswords(list);
  };

  const onCopy = (): void => {
    input.current?.select?.();
    document.execCommand('copy');
  };

  const onDelete = (): void => {
    setPasswords('');
  };

  return (
    <>
      <Field>
        <Button color={state.color} onClick={onGenerate}>
          Generate
        </Button>
      </Field>
      {!state.shouldExport && passwords.length > 0 ? (
        <>
          <Field>
            <Label>
              Result
            </Label>
            {state.amount > 1 ? (
              <TextArea readOnly ref={input as RefObject<HTMLTextAreaElement>} value={passwords}/>
            ) : (
              <Input readOnly type="text" ref={input as RefObject<HTMLInputElement>} value={passwords}/>
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
        </>
      ) : (
        null
      )}
    </>
  );
}
