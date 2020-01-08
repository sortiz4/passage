import {Advanced, Control, Label, Radio, Row, Simple} from 'components';
import {Fragment, React} from 'core/react';
import {State} from 'core/states';

export function SectionA() {
    const [state, setState] = State.useState();
    return (
        <Fragment>
            <Control>
                <Label>Mode</Label>
                <Row>
                    <Radio
                        children="Simple"
                        checked={state.isSimple}
                        onChange={() => setState({isSimple: true})}
                    />
                    <Radio
                        children="Advanced"
                        checked={state.isAdvanced}
                        onChange={() => setState({isAdvanced: true})}
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
