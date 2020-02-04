var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/client.js'),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  }
};