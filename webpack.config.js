var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      './src/client/app.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/assets/'
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
