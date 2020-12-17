/*
 * @Author: 杜康
 * @Date: 2020-12-16 16:28:35
 * @LastEditTime: 2020-12-17 14:04:43
 * @LastEditors: 杜康 VX:Dk_Ns_Gyy
 * @Description: 创建index.js
 * @FilePath: \webpack-learning\src\index.js
 */
import _ from 'lodash'
import printMe from './print'
function component () {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  // lodash已本地引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)
  return element
}
document.body.appendChild(component())
