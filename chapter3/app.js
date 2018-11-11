var FruitsListTitle = Vue.extend({
  template: '<h1>フルーツ一覧</h1>',
});

var FruitsListDescription = Vue.extend({
  template: '<p>季節の代表的なフルーツの一覧です</p>',
});

var FruitsListTable = Vue.extend({
  template: `
    <table>
      <tr>
        <th>季節</th>
        <th>フルーツ</th>
      </tr>
      <tr>
        <td>春</td>
        <td>いちご</td>
      </tr>
      <tr>
        <td>夏</td>
        <td>すいか</td>
      </tr>
      <tr>
        <td>秋</td>
        <td>ぶどう</td>
      </tr>
      <tr>
        <td>冬</td>
        <td>みかん</td>
      </tr>
    </table>
  `,
});

var FruitsList = Vue.extend({
  template: `
    <div>
      <fruits-list-title></fruits-list-title>
      <fruits-list-description></fruits-list-description>
      <fruits-list-table></fruits-list-table>
    </div>
  `,
});

Vue.component('fruits-list-title', FruitsListTitle);
Vue.component('fruits-list-description', FruitsListDescription);
Vue.component('fruits-list-table', FruitsListTable);

new Vue({
  el: '#main',
  components: {
    'fruits-list': FruitsList,
  },
});
