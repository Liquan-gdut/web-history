// 按照这个写法，引入的模块是`AMD` 或者 `CommonJS`，都可以正常运行
(function(root, factory) {

  if(typeof define === 'function' && define.amd) {

    define(['jquery'], factory);

  } else if(typeof module === 'object' &&

    typeof module.exports === 'object') {

    var jquery = require('jquery');

    module.exports = factory(jquery);

  } else {
      
    root.UmdModule = factory(root.jQuery);
  
  }

}(this, function(jquery) {
	// 现在你可以利用jquery做你想做的事了
    
}));
