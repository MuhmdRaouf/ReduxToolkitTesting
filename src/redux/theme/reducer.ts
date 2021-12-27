import type { AppDispatch, RootState } from '../../types/redux';
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { DeviceUtils } from '../../utils/DeviceUtils';
import { toggleTheme } from './actions';
import { themePersistConfig } from './persistor';

interface themeActionsReducerProps {
  isDark: boolean;
}

export const initialState: themeActionsReducerProps = {
  isDark: DeviceUtils.isDeviceDarkMode(),
};

const themeActionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleTheme.fulfilled, (state, action) => {
    state.isDark = action.payload.isDark;
  });
});

export const themeReducer = persistReducer<RootState, AppDispatch>(themePersistConfig, themeActionsReducer);
