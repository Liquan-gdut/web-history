/**
 * 定义有依赖的模块
 */
define(function(require){
  //引入依赖模块(同步)
  var page1 = require('./page1');
  //引入依赖模块(异步)
  require.async('./page2', function (page2) {
    alert(`10行-异异异异异步引入：${page2.msg}`);
  })
  alert(`12行-同同同同同步引入：${page1.msg}`);
})
