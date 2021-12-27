import type { RootState } from '../types/redux';
import { Button, Layout, Spinner, Text } from '@ui-kitten/components';
import React, { useCallback, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';
import { fetchPicture, deletePicture } from '../redux/gallery/actions';

const { width } = Dimensions.get('window');

export const Home = () => {
  const dispatch = useDispatch();
  const { isFetching, fetchErrorMessage } = useSelector((state: RootState) => state.gallery);

  const fetchPictureHandle = useCallback(() => {
    const pictureRepo = 'https://picsum.photos/v2/list';
    dispatch(fetchPicture({ pictureRepo }));
  }, [dispatch]);

  const ResetPictureHandle = useCallback(() => {
    dispatch(deletePicture());
  }, [dispatch]);

  const brokenFetchPictureHandle = useCallback(() => {
    const pictureRepo = 'https://picsum.photos/v2/broke-link';
    dispatch(fetchPicture({ pictureRepo }));
  }, [dispatch]);

  useEffect(() => {
    fetchPictureHandle();
  }, [fetchPictureHandle]);

  return (
    <Layout style={styles.container} level="3">
      <Header />
      <View style={styles.pictureContainer}>{isFetching ? <Spinner size="giant" /> : <Gallery />}</View>
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
          <Text>Reset picture</Text>
        </Button>
        <Button style={styles.button} onPress={brokenFetchPictureHandle}>
          <Text>Broken button</Text>
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
