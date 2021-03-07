(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const page1 = require('./modules/page1');
const page2 = require('./modules/page2');
const page3 = require('./modules/page3');

page1.say();
page2.say();
page3.say();

},{"./modules/page1":2,"./modules/page2":3,"./modules/page3":4}],2:[function(require,module,exports){
module.exports = {
  name: '111',
  say: function () {
    console.log('say 111');
  }
};

},{}],3:[function(require,module,exports){
module.exports = {
  name: '222',
  say: function () {
    console.log('say 222');
  }
};

},{}],4:[function(require,module,exports){
module.exports = {
  name: '333',
  say: function () {
    console.log('say 333');
  }
};

},{}]},{},[1]);
