import React from 'react';

import { AppNavigation } from './src/navigation/AppNavigation';
import { NavigationProvider } from './src/providers/NavigationProvider';
import { ReduxProvider } from './src/providers/ReduxProvider';
import { ThemeProvider } from './src/providers/ThemeProvider';
import { createAppStore } from './src/redux/store';

export const App = () => {
  const { store, persistor } = createAppStore();
  return (
    <ReduxProvider store={store} persistor={persistor}>
      <ThemeProvider>
        <NavigationProvider>
          <AppNavigation />
        </NavigationProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
