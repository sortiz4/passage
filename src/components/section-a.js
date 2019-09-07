import {Advanced, Control, Label, Radio, Row, Simple} from 'components';
import {State} from 'core/models';
import {Fragment, React} from 'core/react';

export function SectionA() {
    const [state, setState] = React.useContext(State.Context);
    const {SIMPLE, ADVANCED} = state;
    return (
        <Fragment>
            <Control>
                <Label>Mode</Label>
                <Row>
                    <Radio
                        children="Simple"
                        checked={state.isSimple}
                        onChange={() => setState({mode: SIMPLE})}
                    />
                    <Radio
                        children="Advanced"
                        checked={state.isAdvanced}
                        onChange={() => setState({mode: ADVANCED})}
                    />
                </Row>
            </Control>
            {state.isSimple ? (
                <Simple/>
            ) : state.isAdvanced ? (
                <Advanced/>
            ) : (
                null
            )}
        </Fragment>
    );
}
