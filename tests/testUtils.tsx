/* eslint-disable import/no-extraneous-dependencies */
import { render as rtlRender } from '@testing-library/react-native';
import type { ReactNode, ReactElement } from 'react';
import React from 'react';

import { createAppStore } from '../src/redux/store';
import { TestingProvider } from './TestingProvider';

interface wrapperProps {
  children: ReactNode;
}

function render(ui: ReactElement, { preloadedState, ...renderOptions }: any = {}) {
  const { store: originalStore, persistor } = createAppStore(preloadedState);
  const dispatch = jest.spyOn(originalStore, 'dispatch');
  const getState = jest.spyOn(originalStore, 'getState');
  const subscribe = jest.spyOn(originalStore, 'subscribe');
  const replaceReducer = jest.spyOn(originalStore, 'replaceReducer');
  const store = { dispatch, getState, replaceReducer, subscribe };

  const wrapper = ({ children }: wrapperProps) => {
    return (
      <TestingProvider store={originalStore} persistor={persistor}>
        {children}
      </TestingProvider>
    );
  };

  return { ...rtlRender(ui, { wrapper, ...renderOptions }), store };
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { render };
