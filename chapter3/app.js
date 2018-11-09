Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>',
});

Vue.component('fruits-list-description', {
  template: '<p>季節の代表的なフルーツの一覧です</p>',
});

new Vue({
  el: '#fruits-list',
});
