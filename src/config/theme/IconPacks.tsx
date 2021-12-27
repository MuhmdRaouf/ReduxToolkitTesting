import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import type { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const iconsList = [
  { name: 'AntDesign', Icon: AntDesign },
  { name: 'Entypo', Icon: Entypo },
  { name: 'Evil', Icon: EvilIcons },
  { name: 'Feather', Icon: Feather },
  { name: 'FontAwesome', Icon: FontAwesome },
  { name: 'FontAwesome5', Icon: FontAwesome5 },
  { name: 'Fontisto', Icon: Fontisto },
  { name: 'Foundation', Icon: Foundation },
  { name: 'Ion', Icon: Ionicons },
  { name: 'MaterialCommunity', Icon: MaterialCommunityIcons },
  { name: 'Material', Icon: MaterialIcons },
  { name: 'Octicons', Icon: Octicons },
  { name: 'SimpleLine', Icon: SimpleLineIcons },
  { name: 'Zocial', Icon: Zocial },
];

type IconType =
  | typeof AntDesign
  | typeof Entypo
  | typeof EvilIcons
  | typeof Feather
  | typeof FontAwesome
  | typeof FontAwesome5
  | typeof Fontisto
  | typeof Foundation
  | typeof Ionicons
  | typeof MaterialCommunityIcons
  | typeof MaterialIcons
  | typeof Octicons
  | typeof SimpleLineIcons
  | typeof Zocial;

interface IconElementProps {
  style: any;
  Icon: IconType;
  IconPackName: string;
}

interface generateReactNativeVectorIconsParam {
  name: string;
  Icon: IconType;
}

const IconElement = ({ Icon, IconPackName, style }: IconElementProps): ReactElement => {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return <Icon name={IconPackName} size={height} color={tintColor} style={iconStyle} />;
};

const IconProvider = (Icon: IconType, IconPackName: string) => ({
  toReactElement: (props: any) => IconElement({ Icon, IconPackName, ...props }),
});

const createIconsMap = (Icon: IconType) => {
  return new Proxy(
    {},
    {
      get(_, IconPackName: string) {
        return IconProvider(Icon, IconPackName);
      },
    },
  );
};

const generateReactNativeVectorIcons = (pack: generateReactNativeVectorIconsParam) => {
  const { name, Icon } = pack;
  const icons = createIconsMap(Icon);
  return { name, icons };
};

const reactNativeVectorIcons = iconsList.map(generateReactNativeVectorIcons);
export const IconsPack = [EvaIconsPack, ...reactNativeVectorIcons];
