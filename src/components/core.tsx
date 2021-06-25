import { ReactElement } from 'react';
import { Box, Title, Window } from './bulma';
import { SectionA } from './section-a';
import { SectionB } from './section-b';
import { SectionC } from './section-c';
import { useAppState } from '../states/app';

export function Core(): ReactElement {
  const state = useAppState()[0];
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
