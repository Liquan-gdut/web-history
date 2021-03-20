import $ from 'jquery';

export default $(
  function setTabsActive() {
    const list = $('.basic-info__17q4j3OPLq').find('li');
    list.click((e) => {
      list.css({ border: 'none' });
      e.currentTarget.style.border = '1px solid #436ddb';
    })
  }
);