/*
 * @Author: 杜康
 * @Date: 2020-12-16 16:28:35
 * @LastEditTime: 2020-12-17 11:49:06
 * @LastEditors: 杜康 VX：Dk_Ns_Gyy
 * @Description: 创建index.js
 * @FilePath: \webpack-learning\src\index.js
 */
import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
import Data from './data.xml'
import Notes from './data.csv'
function component () {
  const element = document.createElement('div')
  // lodash已本地引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  // add the image to our existing div
  const myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)
  console.log(Data)
  console.log(Notes)
  return element
}
document.body.appendChild(component())
