// JSON

// Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.groupEnd(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit, ['name']);
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// JSON to Object
// parse(json)
console.clear();
const obj = JSON.parse(json);
console.log(obj);
console.log(rabbit.birthDate.getDate());
