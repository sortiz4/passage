import {Checkbox, Label, Row} from 'components';
import {Fragment, React} from 'core/react';
import {State} from 'core/states';

export function Simple() {
    const [state, setState] = React.useContext(State.Context);
    function onUppercaseChange(event) {
        setState({uppercase: event.target.checked});
    }
    function onLowercaseChange(event) {
        setState({lowercase: event.target.checked});
    }
    function onNumbersChange(event) {
        setState({numbers: event.target.checked});
    }
    function onSymbolsChange(event) {
        setState({symbols: event.target.checked});
    }
    return (
        <Fragment>
            <Label>Options</Label>
            <Row>
                <Checkbox
                    children="Uppercase"
                    defaultChecked={state.uppercase}
                    onChange={onUppercaseChange}
                />
                <Checkbox
                    children="Lowercase"
                    defaultChecked={state.lowercase}
                    onChange={onLowercaseChange}
                />
            </Row>
            <Row>
                <Checkbox
                    children="Numbers"
                    defaultChecked={state.numbers}
                    onChange={onNumbersChange}
                />
                <Checkbox
                    children="Symbols"
                    defaultChecked={state.symbols}
                    onChange={onSymbolsChange}
                />
            </Row>
        </Fragment>
    );
}
