import { ReactElement } from 'react';
import { AppStateProvider, useInitialAppState } from './app.state';
import { Core } from '../core/core.component';

export function App(): ReactElement {
  return (
    <AppStateProvider value={useInitialAppState()}>
      <Core/>
    </AppStateProvider>
  );
}
