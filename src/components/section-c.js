import {Button, Field, Group, Input, Label, TextArea} from 'components';
import {Fragment, React} from 'core/react';
import {State} from 'core/states';
import {Browser} from 'core/window';

export function SectionC() {
    const [passwords, setPasswords] = React.useState(null);
    const state = React.useContext(State.Context)[0];
    const input = React.useRef();
    return (
        <Fragment>
            <Field>
                <Button
                    color={state.color}
                    children="Generate"
                    onClick={() => {
                        const passwords = state.generate();
                        if(state.export) {
                            const name = `${document.title}.txt`.toLowerCase();
                            Browser.download(name, passwords);
                            setPasswords(null);
                        } else {
                            setPasswords(passwords);
                        }
                    }}
                />
            </Field>
            {!state.export && passwords?.length > 0 ? (
                <Fragment>
                    <Field>
                        <Label>Result</Label>
                        {state.amount > 1 ? (
                            <TextArea
                                readOnly
                                inputRef={input}
                                value={passwords}
                            />
                        ) : (
                            <Input
                                readOnly
                                type="text"
                                inputRef={input}
                                value={passwords}
                            />
                        )}
                    </Field>
                    <Group>
                        <Button
                            color={state.color}
                            children="Copy"
                            onClick={() => {
                                input.current.select();
                                document.execCommand('copy');
                            }}
                        />
                        <Button
                            color="light"
                            children="Delete"
                            onClick={() => setPasswords(null)}
                        />
                    </Group>
                </Fragment>
            ) : (
                null
            )}
        </Fragment>
    );
}
