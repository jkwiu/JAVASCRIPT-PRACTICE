import Table from './components/table.js';
const params = {
  divId: 'test1',
  class: 'contents',
};
const table = new Table(params);
console.log(table);
table.render();
