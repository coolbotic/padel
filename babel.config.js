module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [require.resolve("expo-router/babel")],
    env: {
      production: {
        //  Creates smaller bundle size by excluding modules you don't use, you can use our optional babel plugin.
        // https://callstack.github.io/react-native-paper/docs/guides/getting-started/#:~:text=If%20you%20created%20your%20project%20using%20Expo%2C%20it%27ll%20look%20something%20like%20this%3A
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
