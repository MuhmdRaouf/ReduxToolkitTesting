import { TopNavigation } from '@ui-kitten/components';
import React from 'react';

import { ThemeToggleButton } from './ThemeToggleButton';
import { Title } from './Title';

export const Header = () => {
  return <TopNavigation title={Title} accessoryRight={ThemeToggleButton} />;
};
