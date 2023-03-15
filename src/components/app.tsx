import { ReactElement } from 'react';
import { AppStateProvider, useInitialAppState } from './app.state';
import { Core } from './core';

export function App(): ReactElement {
  return (
    <AppStateProvider value={useInitialAppState()}>
      <Core/>
    </AppStateProvider>
  );
}
