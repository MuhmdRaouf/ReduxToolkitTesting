import { combineReducers } from '@reduxjs/toolkit';

import { galleryReducer } from '../gallery/reducer';
import { themeReducer } from '../theme/reducer';

export const rootReducer = combineReducers({
  gallery: galleryReducer,
  theme: themeReducer,
});
