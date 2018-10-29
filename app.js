var items = [
  { name: '鉛筆', price: 300, quantity: 0 },
  { name: 'ノート', price: 400, quantity: 0 },
  { name: '消しゴム', price: 500, quantity: 0 },
];

var vm = new Vue({
  el: '#app',
  data: {
    items: items,
  },
  filters: {
    numberWithDelimiter: function(value) {
      if (!value) { return '0'; }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  },
});

window.vm = vm;

vm.$watch(function() {
  return this.items[0].quantity
}, function(quantity) {
  console.log(quantity);
});

var vm2 = new Vue({
  el: '#b-button',
  data: {
    canBuy: false,
    loggedInButton: 'ログイン済みのため購入できます',
  },
});
