const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/client/app.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loader: 'stylelint',
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: path.join(__dirname, 'src/client'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      },
    ],
  },
  postcss() {
    return [require('precss'), require('postcss-cssnext')];
  },
  eslint: {
    failOnWarning: true,
    failOnError: true,
  },
  stylelint: {
    configFile: path.join(__dirname, './.stylelintrc'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('app.css'),
  ],
};
