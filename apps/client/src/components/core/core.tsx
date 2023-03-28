import { ReactElement } from 'react';
import { useAppState } from '../app/app.state';
import { Box, Progress, Title, Window } from '../bulma/bulma';
import { SectionA } from '../section-a/section-a';
import { SectionB } from '../section-b/section-b';
import { SectionC } from '../section-c/section-c';

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
