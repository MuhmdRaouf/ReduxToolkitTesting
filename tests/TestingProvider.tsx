import type { ReactNode } from 'react';
import React from 'react';

import { NavigationProvider } from '../src/providers/NavigationProvider';
import { ReduxProvider } from '../src/providers/ReduxProvider';
import { ThemeProvider } from '../src/providers/ThemeProvider';

interface TestingProviderProps {
  preloadedState?: any;
  children: ReactNode;
}

export const TestingProvider = ({ children }: TestingProviderProps) => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
