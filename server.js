/*
 * @Author: 杜康 VX:Dk_Ns_Gyy
 * @Date: 2020-12-17 16:48:50
 * @LastEditors: 杜康 VX:Dk_Ns_Gyy
 * @LastEditTime: 2020-12-17 16:54:08
 * @FilePath: \webpack-learning\server.js
 */
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n')
})