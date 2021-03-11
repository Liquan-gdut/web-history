/**
 * 定义有依赖的模块
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
