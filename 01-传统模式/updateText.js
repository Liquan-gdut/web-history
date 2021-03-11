// 手动获取到当前元素
var el = document.getElementById('viewing-btn');

el.addEventListener('click', function () {
  el.innerText = (el.textContent === '已查看' ? '未查看' : '已查看');
});
