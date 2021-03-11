(function () {
  // 定义 require 的相关配置
  require.config({
    // baseUrl: 'modules/',
    paths: {
      page1: 'modules/page1',
      page2: 'modules/page2',
      page3: 'modules/page3',
      jquery: 'lib/jquery.min',
    }
  });

  require(['page2', 'page3'], function (page2, page3) {
    page2.say();
    page3.render();
  });
})()
