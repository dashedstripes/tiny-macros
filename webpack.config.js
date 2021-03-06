const webpack = require('webpack')
const path = require('path')

const config = {

  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}


module.exports = config