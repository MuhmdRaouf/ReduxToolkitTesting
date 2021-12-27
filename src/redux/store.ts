import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';

import { rootPersistConfig } from './root/persistor';
import { rootReducer } from './root/reducer';

export const createAppStore = (preloadedState?: any) => {
  const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => {
      let defaultMiddleware = getDefaultMiddleware({ immutableCheck: false, serializableCheck: false });

      if (process.env.NODE_ENV === 'development') {
        defaultMiddleware = defaultMiddleware.concat(logger);
      }
      return defaultMiddleware;
    },
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
