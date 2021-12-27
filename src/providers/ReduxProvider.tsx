import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

interface ReduxProviderProps {
  store: any;
  persistor: Persistor;
  children: ReactNode;
}

export const ReduxProvider = ({ store, persistor, children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
