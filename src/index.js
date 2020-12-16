/*
 * @Author: 杜康
 * @Date: 2020-12-16 16:28:35
 * @LastEditTime: 2020-12-16 16:31:37
 * @LastEditors: Please set LastEditors
 * @Description: 创建index.js
 * @FilePath: \webpack-learning\src\index.js
 */
function component () {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}
document.body.appendChild(component())
