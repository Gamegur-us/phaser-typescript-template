const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//webpackConfig.entry[entry].push('webpack/hot/dev-server');
//webpackConfig.entry[entry].push('webpack-dev-server/client?http://localhost:8181');

module.exports = {

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  entry: {
    app: './app/src/game.ts',
    includes: './app/includes.js',
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'My Game', template: 'index.html' }),
    new webpack.optimize.CommonsChunkPlugin('includes', 'includes.bundle.js'),
    new ExtractTextPlugin('styles.css')
  ],

  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  }
};
