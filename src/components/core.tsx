import { ReactElement } from 'react';
import { Box, Title, Window } from './bulma';
import { SectionA } from './section-a';
import { SectionB } from './section-b';
import { SectionC } from './section-c';
import { useAppState } from '../states/app';

export function Core(): ReactElement {
  const appState = useAppState()[0];
  return (
    <Window color={appState.color}>
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
