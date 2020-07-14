const arr1 = [1,2,3,4,5];

// for
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  console.log(element);
}

// for of
for (let num of arr1){
  console.log(num);
}

// forEach
arr1.forEach(element => console.log(element));

// Addition
console.clear();
arr1.push(6,7);
console.log(arr1);
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

// unshift: add an item to the benigging
console.clear();
arr1.unshift(-1,0);
console.log(arr1);
arr1.shift();
console.log(arr1);

// splice: remove an item by index position
console.clear();
arr1.splice(0,1);
console.log(arr1);

// combine two arrays
console.clear();
const arr2 = [10, 11];
const newArr = arr1.concat(arr2);
console.log(newArr);

// Searching
console.clear();
// indexOf
console.log(arr1.indexOf(2));
// includes
console.log(arr1.includes(1));
// lastIndexOf
console.clear();
arr1.push(1);
console.log(arr1.indexOf(1));
console.log(arr1.lastIndexOf(1));
