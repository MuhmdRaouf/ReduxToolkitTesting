/* eslint-disable import/no-extraneous-dependencies */
const MetroConfig = require('@ui-kitten/metro-config');
const DefaultConfig = require('metro-config/src/defaults').getDefaultValues();

const evaConfig = { evaPackage: '@eva-design/eva' };

module.exports = MetroConfig.create(evaConfig, {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: DefaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...DefaultConfig.resolver.sourceExts, 'svg'],
  },
});
