import {Checkbox, Label, Row} from 'components';
import {State} from 'core/models';
import {Fragment, React} from 'core/react';

export function Simple() {
    const [state, setState] = React.useContext(State.Context);
    const onUppercaseChange = event => {
        setState({uppercase: event.target.checked});
    };
    const onLowercaseChange = event => {
        setState({lowercase: event.target.checked});
    };
    const onNumbersChange = event => {
        setState({numbers: event.target.checked});
    };
    const onSymbolsChange = event => {
        setState({symbols: event.target.checked});
    };
    return (
        <Fragment>
            <Label>
                Options
            </Label>
            <Row>
                <Checkbox
                    defaultChecked={state.uppercase}
                    onChange={onUppercaseChange}
                >
                    Uppercase
                </Checkbox>
                <Checkbox
                    defaultChecked={state.lowercase}
                    onChange={onLowercaseChange}
                >
                    Lowercase
                </Checkbox>
            </Row>
            <Row>
                <Checkbox
                    defaultChecked={state.numbers}
                    onChange={onNumbersChange}
                >
                    Numbers
                </Checkbox>
                <Checkbox
                    defaultChecked={state.symbols}
                    onChange={onSymbolsChange}
                >
                    Symbols
                </Checkbox>
            </Row>
        </Fragment>
    );
}
