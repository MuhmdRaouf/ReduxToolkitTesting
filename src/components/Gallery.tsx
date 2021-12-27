import type { RootState } from '../types/redux';
import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { ReduxIcon } from '../Icons/Redux';

const { width } = Dimensions.get('window');
const pictureSize = width * 0.8;

export const Gallery = () => {
  const { picture } = useSelector((state: RootState) => state.gallery);

  return picture ? <Image style={styles.picture} source={{ uri: picture }} /> : <ReduxIcon size={pictureSize} />;
};

const styles = StyleSheet.create({
  picture: {
    width: pictureSize,
    height: pictureSize,
    margin: 10,
    borderRadius: 10,
  },
});
