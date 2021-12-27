import { AppRegistry } from 'react-native';
import { enableFreeze, enableScreens } from 'react-native-screens';

import { App } from './App';
import { name } from './app.json';

enableFreeze();
enableScreens();

AppRegistry.registerComponent(name, () => App);
