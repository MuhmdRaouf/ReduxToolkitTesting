import { Icon } from '@ui-kitten/components';
import React, { ReactElement } from 'react';
import type { ImageProps } from 'react-native';

export const MoonIcon = (props?: Partial<ImageProps>): ReactElement<ImageProps> => {
  return <Icon {...props} name="moon" pack="eva" />;
};
