var items = [
  { name: '鉛筆', price: 300, quantity: 0 },
];

var vm = new Vue({
  el: '#app',
  data: {
    items: items,
  },
});

window.vm = vm;
