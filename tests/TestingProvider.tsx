import type { ReactNode } from 'react';
import React from 'react';
import type { Persistor } from 'redux-persist';

import { NavigationProvider } from '../src/providers/NavigationProvider';
import { ReduxProvider } from '../src/providers/ReduxProvider';
import { ThemeProvider } from '../src/providers/ThemeProvider';

interface TestingProviderProps {
  store: any;
  persistor: Persistor;
  children: ReactNode;
}

export const TestingProvider = ({ store, persistor, children }: TestingProviderProps) => {
  return (
    <ReduxProvider store={store} persistor={persistor}>
      <ThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
