// 定义有第三方依赖的模块
define(['page1', 'jquery'], function (page1, $) {
  function render() {
    console.log($('body').css);
    $('body').css({
      background: 'green',
      'text-align': 'center',
      'font-size': '48px',
      'color': '#fff',
      'font-weight': '500',
    });
    $('body').text(page1.getMsg());
  }



  return { render }; // 暴露的模块
});
