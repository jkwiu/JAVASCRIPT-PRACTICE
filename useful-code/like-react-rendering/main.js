import Table from "./components/table.js";
const params = {
  divId: "test1",
  class: "contents",
};
const params2 = {
  divId: "test2",
  class: "contents",
};
const params3 = {
  divId: "test3",
  class: "contents",
};
const table = new Table(params);
console.log(table);
table.render();
table.render();
table.render();
