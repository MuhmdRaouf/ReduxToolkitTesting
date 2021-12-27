import type { RootState } from '../types/redux';
import { Button, Layout, Spinner, Text } from '@ui-kitten/components';
import React, { useCallback, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPicture, deletePicture } from '../redux/gallery/actions';

export const { width } = Dimensions.get('window');

export const Home = () => {
  const dispatch = useDispatch();
  const defaultPicture =
    'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png';
  const { picture, isFetching, fetchErrorMessage } = useSelector((state: RootState) => state.gallery);

  const fetchPictureHandle = useCallback(() => {
    const pictureRepo = 'https://picsum.photos/v2/list';
    dispatch(fetchPicture({ pictureRepo }));
  }, [dispatch]);

  const ResetPictureHandle = useCallback(() => {
    dispatch(deletePicture(defaultPicture));
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
      <View style={styles.pictureContainer}>
        {isFetching ? <Spinner size="giant" /> : <Image style={styles.picture} source={{ uri: picture }} />}
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: width * 0.8,
    height: width * 0.8,
    margin: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 25,
  },
  button: {
    width: width / 2,
    marginBottom: 10,
  },
});
