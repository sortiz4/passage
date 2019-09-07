import {Advanced, Control, Label, Radio, Row, Simple} from 'components';
import {Fragment, React} from 'core/react';

export function Mode() {
    const [mode, setMode] = React.useState(0);
    const SIMPLE = 0, ADVANCED = 1;
    return (
        <Fragment>
            <Control>
                <Label>
                    Mode
                </Label>
                <Row>
                    <Radio
                        children="Simple"
                        checked={mode === SIMPLE}
                        onChange={() => setMode(SIMPLE)}
                    />
                    <Radio
                        children="Advanced"
                        checked={mode === ADVANCED}
                        onChange={() => setMode(ADVANCED)}
                    />
                </Row>
            </Control>
            {mode === SIMPLE ? (
                <Simple/>
            ) : mode === ADVANCED ? (
                <Advanced/>
            ) : (
                null
            )}
        </Fragment>
    );
}
