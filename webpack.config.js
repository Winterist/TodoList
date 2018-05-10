var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/todo_api/front/src',
  entry: "./js/index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-2']
        }
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
        //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ]
  },
  output: {
    path: __dirname + "/todo_api/front/static/front/bundle_pac",
    filename: "bundle.js"
  }
}
