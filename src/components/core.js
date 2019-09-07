import {Box, SectionA, SectionB, SectionC, Title, Window} from 'components';
import {State} from 'core/models';
import {React} from 'core/react';

export function Core() {
    const state = React.useContext(State.Context)[0];
    return (
        <Window color={state.color}>
            <Box>
                <Title centered>
                    Passage
                </Title>
                <hr/>
                <SectionA/>
                <SectionB/>
                <SectionC/>
            </Box>
        </Window>
    );
}
