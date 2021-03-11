// 定义没有依赖的模块
define(function () {
  const msg = 'hello requies';

  function getMsg() {
    return msg;
  }

  return { getMsg }; // 暴露的模块
});
