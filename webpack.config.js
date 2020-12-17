/*
 * @Author: 杜康
 * @Date: 2020-12-16 17:02:31
 * @LastEditTime: 2020-12-17 13:54:58
 * @LastEditors: 杜康 VX：Dk_Ns_Gyy
 * @Description: 创建webpack.config.js
 * @FilePath: \webpack-learning\webpack.config.js
 */
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
