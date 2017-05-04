const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: ['./index.js', './style/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  externals: {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        include: [
          path.resolve(__dirname, "src")
        ],
      use: 'babel-loader'
      }, //babel
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use: ['css-loader', 'postcss-loader']
                }),
        //'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' for css modules
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use: ['css-loader','sass-loader', 'postcss-loader']
                }),
      },
      {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          use: 'file-loader?name=[name].[ext]'  // <-- retain original file name
      }

    ]
  },
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 1337
},
  plugins: [
    new HtmlWebpackPlugin({template: './index.html',  favicon: './imgs/favicon.ico'}),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'bundle.css',
      allChunks: true,
    }),
  ]
};