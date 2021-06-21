import { ReactElement } from 'react';
import { Core } from './core';
import { AppStateProvider, useInitialAppState } from '../states/app';

export function App(): ReactElement {
  return (
    <AppStateProvider value={useInitialAppState()}>
      <Core/>
    </AppStateProvider>
  );
}
