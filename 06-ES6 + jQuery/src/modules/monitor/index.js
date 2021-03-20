import $ from 'jquery';
import _ from 'lodash';

export default $(
  function setIsViews() {
    $('.view-btn').click((e) => {
      e.currentTarget.innerHTML = (_.isEqual(e.currentTarget.textContent, '已查看') ? '查看' : '已查看');
    })
  }
);