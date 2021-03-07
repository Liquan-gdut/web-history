/**
 * 定义有外部依赖的模块
 * @param {array} 传入的模块，可以是内部模块，也可以是第三方模块
 */
define(['page1'], function (page1) {
  const msg = 'hello requies';

  function say() {
    alert(page1.getMsg());
  }

  return { say }; // 暴露的模块
});
