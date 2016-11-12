const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./app.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, './public/'),
    filename: '[name].js',
    publicPath: '/public/'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',

        include: [
          path.resolve(__dirname, 'app.js'),
          path.resolve(__dirname, 'components')
        ],

        test: [/\.js$/]
      }
    ]
  },

  resolve: {extensions: ['', '.js']},

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ],

  devtool: 'source-map'
}
