import React from 'react';

import { AppNavigation } from './src/navigation/AppNavigation';
import { NavigationProvider } from './src/providers/NavigationProvider';
import { ReduxProvider } from './src/providers/ReduxProvider';
import { ThemeProvider } from './src/providers/ThemeProvider';

export const App = () => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <NavigationProvider>
          <AppNavigation />
        </NavigationProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
