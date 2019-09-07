import {Button, Field,  Group, Input, Label, TextArea} from 'components';
import {State} from 'core/models';
import {Fragment, React} from 'core/react';
import {Browser} from 'core/window';

export function SectionC() {
    const [passwords, setPasswords] = React.useState(null);
    const state = React.useContext(State.Context)[0];
    const input = React.useRef();
    const show = !state.export && passwords?.length > 0;
    return (
        <Fragment>
            {show ? (
                <Field>
                    <Label>Result</Label>
                    <Group>
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
                        <Button
                            color="light"
                            children="Copy"
                            onClick={() => {
                                input.current.select();
                                document.execCommand('copy');
                            }}
                        />
                    </Group>
                </Field>
            ) : (
                null
            )}
            <Group>
                <Button
                    color={state.color}
                    children="Generate"
                    onClick={() => {
                        const passwords = state.generate();
                        if(state.export) {
                            Browser.download(
                                passwords,
                                `${document.title}.txt`.toLowerCase(),
                            );
                            setPasswords(null);
                        } else {
                            setPasswords(passwords);
                        }
                    }}
                />
                {show ? (
                    <Button
                        color="light"
                        children="Clear"
                        onClick={() => setPasswords(null)}
                    />
                ) : (
                    null
                )}
            </Group>
        </Fragment>
    );
}
