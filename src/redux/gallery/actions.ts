import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface fetchPictureReturn {
  picture: string;
}
interface fetchPictureArgs {
  pictureRepo: string;
}
interface fetchPictureThunk {
  rejectValue: { message: string };
}
export const fetchPicture = createAsyncThunk<fetchPictureReturn, fetchPictureArgs, fetchPictureThunk>(
  'FETCH_PICTURE',
  async ({ pictureRepo }, { rejectWithValue }) => {
    return axios
      .get(pictureRepo)
      .then(async (response) => {
        const pictureList = response.data;
        const pictureIndex = Math.floor(Math.random() * pictureList.length);
        return { picture: pictureList[pictureIndex].download_url };
      })
      .catch((error) => {
        const message = error.response.data;
        return rejectWithValue({ message });
      });
  },
);

export const deletePicture = createAction('DELETE_PICTURE', (picture: string) => {
  return { payload: { picture } };
});
