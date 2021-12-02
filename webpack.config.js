// const path = require('path');
const webpack = require('webpack');

module.exports = {
//   mode: "production",
  // entry: path.resolve(__dirname, './src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
        'store2/cache': 'store2/src/store.cache.js',
      },
  },
  plugins: [
    new webpack.ProvidePlugin({
      'window.store': 'store2',
      store: 'store2',
    }),

  ],
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
};