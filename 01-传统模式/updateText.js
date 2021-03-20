// 手动获取到当前元素
var viewingEl = document.getElementById('viewing-btn');

viewingEl.addEventListener('click', function () {
  el.innerText = (el.textContent === '已查看' ? '未查看' : '已查看');
});
