import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ReduxIcon } from '../Icons/Redux';

export const Title = (props: any) => (
  <View style={styles.titleContainer}>
    <ReduxIcon style={styles.logo} />
    <Text {...props}>Redux ToolKit testing app</Text>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 10,
  },
});
