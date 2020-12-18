import { Box, SectionA, SectionB, SectionC, Title, Window } from 'components';
import { React } from 'core/react';
import { State } from 'core/states';

export function Core() {
  const state = State.useState()[0];
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
