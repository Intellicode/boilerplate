var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
    entry: [
      './src/client/app.js'
    ],
    output: {
        path: __dirname,
        filename: 'build/js/bundle.js',
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: path.join(__dirname, 'src/client') },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
};
