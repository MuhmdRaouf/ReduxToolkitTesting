import { Appearance } from 'react-native';

export class DeviceUtils {
  static isDeviceDarkMode = () => {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme === 'dark';
  };
}
