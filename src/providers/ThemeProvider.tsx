import type { RootState } from '../types/redux';
import { mapping, dark, light } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import React, { ReactNode } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { IconsPack } from '../config/theme/IconPacks';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { isDark } = useSelector((state: RootState) => state.theme, shallowEqual);

  return (
    <>
      <IconRegistry icons={IconsPack} />
      <ApplicationProvider mapping={mapping} theme={isDark ? dark : light}>
        {children}
      </ApplicationProvider>
    </>
  );
};
