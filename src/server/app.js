var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../../webpack.config');
var path = require('path');

config.entry.unshift(
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server'
);
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../../public'),
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
