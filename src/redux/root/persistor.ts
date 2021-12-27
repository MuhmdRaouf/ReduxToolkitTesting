import AsyncStorage from '@react-native-async-storage/async-storage';

export const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['gallery'],
};
