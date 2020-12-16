/*
 * @Author: 杜康
 * @Date: 2020-12-16 17:02:31
 * @LastEditTime: 2020-12-16 17:25:16
 * @LastEditors: 杜康 微信：Dk_Ns_Gyy
 * @Description: 创建webpack.config.js
 * @FilePath: \webpack-learning\webpack.config.js
 */
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
