import store from './store/index.js';
import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';
import Table from './components/table.js';

const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let value = inputElement.value.trim();

  if (value.length) {
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
  }
});

let value = 1;

const set = setInterval(() => {
  store.dispatch('addItem', value++);

  if (value === 10) {
    console.log('종료', value);
    clearInterval(set);
  }
}, 1000);

const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();
const tableInstance = new Table();

countInstance.render();
listInstance.render();
statusInstance.render();
tableInstance.render();
