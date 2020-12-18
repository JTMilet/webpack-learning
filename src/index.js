/*
 * @Author: 杜康
 * @Date: 2020-12-16 16:28:35
 * @LastEditTime: 2020-12-18 09:08:00
 * @LastEditors: 杜康 VX:Dk_Ns_Gyy
 * @Description: 创建index.js
 * @FilePath: \webpack-learning\src\index.js
 */
import _ from 'lodash'
function component () {
  const element = document.createElement('div')
  // lodash已本地引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}
document.body.appendChild(component())
