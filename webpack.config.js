var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/client/app.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel?cacheDirectory'], include: path.join(__dirname, 'src/client') },

      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
