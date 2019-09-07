import {Button} from 'components';
import {State} from 'core/models';
import {Fragment, React} from 'core/react';

export function SectionC() {
    const state = React.useContext(State.Context)[0];
    return (
        <Fragment>
            <Button
                color={state.color}
                children="Generate"
            />
        </Fragment>
    );
}
