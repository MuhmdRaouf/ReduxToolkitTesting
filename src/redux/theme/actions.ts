import type { RootState } from '../../types/redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface toggleThemeReturn {
  isDark: boolean;
}
interface toggleThemeThunk {
  state: RootState;
}
export const toggleTheme = createAsyncThunk<toggleThemeReturn, void, toggleThemeThunk>(
  'TOGGLE_THEME',
  (_, { getState }) => {
    const { theme } = getState();
    const isDark = !theme.isDark;

    return { isDark };
  },
);
