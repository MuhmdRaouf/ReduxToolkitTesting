import type { RootState } from '../types/redux';
import { Button, Layout, Spinner, Text } from '@ui-kitten/components';
import React, { useCallback, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPicture, deletePicture } from '../redux/gallery/actions';

export const { width } = Dimensions.get('window');

export const Home = () => {
  const dispatch = useDispatch();
  const defualtPicture = 'https://reactnative.dev/img/tiny_logo.png';
  const { picture, isFetching, fetchErrorMessage } = useSelector((state: RootState) => state.gallery);

  const fetchPictureHandle = useCallback(() => {
    const pictureRepo = 'https://picsum.photos/v2/list';
    dispatch(fetchPicture({ pictureRepo }));
  }, [dispatch]);

  const ResetPictureHandle = useCallback(() => {
    dispatch(deletePicture(defualtPicture));
  }, [dispatch]);

  const brokenFetchPictureHandle = useCallback(() => {
    const pictureRepo = 'https://picsum.photos/v2/broke-link';
    dispatch(fetchPicture({ pictureRepo }));
  }, [dispatch]);

  useEffect(() => {
    fetchPictureHandle();
  }, [fetchPictureHandle]);

  return (
    <Layout style={styles.container}>
      {isFetching ? <Spinner size="giant" /> : <Image style={styles.avatar} source={{ uri: picture }} />}
      {fetchErrorMessage && (
        <Text status="danger" category="h5">
          {fetchErrorMessage}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={fetchPictureHandle}>
          <Text>Fetch new picture</Text>
        </Button>
        <Button style={styles.button} onPress={ResetPictureHandle}>
          <Text>Reset Picture</Text>
        </Button>
        <Button style={styles.button} onPress={brokenFetchPictureHandle}>
          <Text>Broken Button</Text>
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  avatar: {
    width: width * 0.8,
    height: width * 0.8,
    margin: 8,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: width / 2,
    marginBottom: 10,
  },
});
