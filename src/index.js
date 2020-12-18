/*
 * @Author: 杜康
 * @Date: 2020-12-16 16:28:35
 * @LastEditTime: 2020-12-18 09:48:46
 * @LastEditors: 杜康 VX:Dk_Ns_Gyy
 * @Description: 创建index.js
 * @FilePath: \webpack-learning\src\index.js
 */
async function getComponent () {
  const { default: _ } = await import('lodash')
  element.innerHTML = _.join(['Hello', 'Webpack!'], ' ')
  return element
}
getComponent()
  .then(component => {
    document.body.appendChild(component())
  })