import AsyncStorage from '@react-native-async-storage/async-storage';

export const galleryPersistConfig = {
  key: 'gallery',
  storage: AsyncStorage,
  blacklist: ['isFetching', 'fetchErrorMessage'],
};
