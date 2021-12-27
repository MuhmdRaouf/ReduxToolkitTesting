import type { AppDispatch, RootState } from '../../types/redux';
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { fetchPicture, deletePicture } from './actions';
import { galleryPersistConfig } from './persistor';

interface galleryActionsReducerProps {
  picture: string | null;
  isFetching: boolean;
  fetchErrorMessage: string | null;
}

export const initialState: galleryActionsReducerProps = {
  picture: null,
  isFetching: false,
  fetchErrorMessage: null,
};

const galleryActionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPicture.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(fetchPicture.fulfilled, (state, action) => {
      state.isFetching = false;
      state.fetchErrorMessage = null;
      state.picture = action.payload?.picture ?? null;
    })
    .addCase(fetchPicture.rejected, (state, action) => {
      state.isFetching = false;
      state.picture =
        'https://e7.pngegg.com/pngimages/319/145/png-clipart-http-404-user-interface-design-design-purple-text.png';
      state.fetchErrorMessage = action.payload?.message ?? null;
    })
    .addCase(deletePicture, (state, action) => {
      state.picture = action.payload.picture;
      state.fetchErrorMessage = null;
    });
});

export const galleryReducer = persistReducer<RootState, AppDispatch>(galleryPersistConfig, galleryActionsReducer);
