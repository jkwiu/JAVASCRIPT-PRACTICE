const Person = function(name, age){
  this.name = name;
  this.age = age;
}
console.log('name' in Person);
console.log('sex' in Person);

const jk = new Person('jk', 35);

// for..in
for (key in jk){
  console.log(key);
}

// for..of
const array = [1,2,4,5];
for(value of array){
  console.log(value);
}

//clone
const jk2 = jk;
// 이러면 똑같은 ref를 가르킨다.
console.log(jk2);

// old way
const jk3 = {};
for (key in jk){
  jk3[key] = jk[key];
}
console.clear();
console.log(jk3);

// assign
Object.assign(jk4, jk);
console.clear();
console.log(jk4);