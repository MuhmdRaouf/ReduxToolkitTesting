import type { RootState } from '../types/redux';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoonIcon } from '../Icons/Moon';
import { SunIcon } from '../Icons/Sun';
import { toggleTheme } from '../redux/theme/actions';

export const ThemeToggleButton = (props: any) => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.theme);

  const onPressHandle = () => {
    dispatch(toggleTheme());
  };

  return <Button {...props} appearance="ghost" onPress={onPressHandle} accessoryRight={isDark ? SunIcon : MoonIcon} />;
};
