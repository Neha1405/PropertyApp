module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/jest-preset'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|my-project|react-native-button)/)',
  ],
};
