'use client';
import { ReactElement } from 'react';
import { AppStateProvider, useNewAppState } from './app.state';
import { Core } from '../core/core';

export function App(): ReactElement {
  return (
    <AppStateProvider value={useNewAppState()}>
      <Core/>
    </AppStateProvider>
  );
}
