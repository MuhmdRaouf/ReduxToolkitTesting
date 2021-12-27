import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import { rootPersistConfig } from './root/persistor';
import { rootReducer } from './root/reducer';

const store: any = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => {
    let defaultMiddleware = getDefaultMiddleware({ immutableCheck: false, serializableCheck: false });

    if (process.env.NODE_ENV === 'development') {
      defaultMiddleware = defaultMiddleware.concat(logger);
    }
    return defaultMiddleware;
  },
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
