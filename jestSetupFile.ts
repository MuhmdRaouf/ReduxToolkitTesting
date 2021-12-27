import type { ReactNode } from 'react';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: ({ children }: { children: ReactNode }) => children,
}));
