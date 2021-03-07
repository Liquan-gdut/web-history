/**
 * 定义没有依赖的模块
 * @param {fun} require 用于引入其他模块
 * @param {fun} exports 用于导出模块时，给模块的单个属性赋值
 * @param {fun} module 用于导出模块时，给模块的整体属性赋值
 */
define(function(require, exports, module){
  const msg = 'hello CMD';
  const say = function () {
    console.log(`it is saying ${msg}`)
  }

  module.exports = {
    msg, say
  }; // => exports.msg = msg; exports.say = say; 
})
