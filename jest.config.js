const config = {
  verbose: true,
  preset: 'react-native',
  setupFiles: ['<rootDir>/jestSetupFile.js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@react-native|react-native-flipper)'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};

module.exports = config;
