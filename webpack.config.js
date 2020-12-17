/*
 * @Author: 杜康
 * @Date: 2020-12-16 17:02:31
 * @LastEditTime: 2020-12-17 14:53:02
 * @LastEditors: 杜康 VX:Dk_Ns_Gyy
 * @Description: 创建webpack.config.js
 * @FilePath: \webpack-learning\webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
