import { Icon } from '@ui-kitten/components';
import React, { ReactElement } from 'react';
import type { ImageProps } from 'react-native';

export const SunIcon = (props?: Partial<ImageProps>): ReactElement<ImageProps> => {
  return <Icon {...props} name="sun" pack="eva" />;
};
