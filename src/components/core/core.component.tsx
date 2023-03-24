import { ReactElement } from 'react';
import { useAppState } from '../app/app.state';
import { SectionA } from '../section-a/section-a.component';
import { SectionB } from '../section-b/section-b.component';
import { SectionC } from '../section-c/section-c.component';
import { Box, Progress, Title, Window } from '../../bulma';

export function Core(): ReactElement {
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
