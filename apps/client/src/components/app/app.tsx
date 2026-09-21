'use client';
import { ReactNode } from 'react';
import { AppStateProvider, useNewAppState } from './app.state';
import { Core } from '../core';

export function App(): ReactNode {
  return (
    <AppStateProvider value={useNewAppState()}>
      <Core/>
    </AppStateProvider>
  );
}
