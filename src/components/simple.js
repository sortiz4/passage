import {Checkbox, Label, Row} from 'components';
import {Fragment, React} from 'core/react';

export function Simple() {
    return (
        <Fragment>
            <Label>
                Options
            </Label>
            <Row>
                <Checkbox defaultChecked={true}>
                    Uppercase
                </Checkbox>
                <Checkbox defaultChecked={true}>
                    Lowercase
                </Checkbox>
            </Row>
            <Row>
                <Checkbox defaultChecked={true}>
                    Numbers
                </Checkbox>
                <Checkbox defaultChecked={true}>
                    Symbols
                </Checkbox>
            </Row>
        </Fragment>
    );
}
