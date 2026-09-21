import { ReactNode } from 'react';
import { useAppState } from '../app/app.state';
import { Box, Progress, Title, Window } from '../bulma';
import { SectionA } from '../section-a';
import { SectionB } from '../section-b';
import { SectionC } from '../section-c';

export function Core(): ReactNode {
  const state = useAppState()[0];

  return (
    <Window color={state.color}>
      <Box>
        <Title centered>
          Passage
        </Title>
        <Progress color={state.color} value={state.score}/>
        <SectionA/>
        <SectionB/>
        <SectionC/>
      </Box>
    </Window>
  );
}
