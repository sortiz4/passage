import { Fragment, MutableRefObject, ReactElement, useRef, useState } from 'react';
import { Button, Field, Group, Input, Label, TextArea } from './bulma';
import { useAppState } from '../states/app';
import { createDownload } from '../utils';

export function SectionC(): ReactElement {
  const [passwords, setPasswords] = useState('');
  const appState = useAppState()[0];
  const input = useRef<HTMLInputElement | HTMLTextAreaElement>();

  function onGenerate(): void {
    const passwords = appState.createPasswords();
    if (appState.shouldExport) {
      createDownload(`${document.title}.txt`.toLowerCase(), passwords);
      setPasswords('');
    } else {
      setPasswords(passwords);
    }
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
        <Button color={appState.color} onClick={onGenerate}>
          Generate
        </Button>
      </Field>
      {!appState.shouldExport && passwords.length > 0 ? (
        <Fragment>
          <Field>
            <Label>
              Result
            </Label>
            {appState.amount > 1 ? (
              <TextArea readOnly ref={input as MutableRefObject<HTMLTextAreaElement>} value={passwords}/>
            ) : (
              <Input readOnly type="text" ref={input as MutableRefObject<HTMLInputElement>} value={passwords}/>
            )}
          </Field>
          <Group>
            <Button color={appState.color} onClick={onCopy}>
              Copy
            </Button>
            <Button color="light" onClick={onDelete}>
              Delete
            </Button>
          </Group>
        </Fragment>
      ) : (
        void 0
      )}
    </Fragment>
  );
}
