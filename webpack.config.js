/*
 * @Author: 杜康
 * @Date: 2020-12-16 17:02:31
 * @LastEditTime: 2020-12-18 09:26:11
 * @LastEditors: 杜康 VX:Dk_Ns_Gyy
 * @Description: 创建webpack.config.js
 * @FilePath: \webpack-learning\webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    // index: './src/index.js',
    // another: './src/another-module.js',
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared'
    },
    shared: 'lodash'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
