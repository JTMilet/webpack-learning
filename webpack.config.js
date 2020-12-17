/*
 * @Author: 杜康
 * @Date: 2020-12-16 17:02:31
 * @LastEditTime: 2020-12-17 10:26:06
 * @LastEditors: 杜康 微信：Dk_Ns_Gyy
 * @Description: 创建webpack.config.js
 * @FilePath: \webpack-learning\webpack.config.js
 */
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // style
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      // image
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
