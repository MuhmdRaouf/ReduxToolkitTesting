import { useFlipper, useReduxDevToolsExtension } from '@react-navigation/devtools';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import React, { ReactNode } from 'react';

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);
  return <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>;
};
