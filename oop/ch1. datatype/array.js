var arr = [1,2,3];

arr.color = 'blue';
arr.name = 'number_array';
// console.log(arr.length);

arr[3] = 'red';
// console.log(arr.length);
// console.dir(arr);

// delete arr[2];
arr.splice(2,1);

for(prop in arr){
    console.log(prop, arr[prop]);
}

for(var i = 0; i<arr.length; i++){
    console.log(i, arr[i]);
}
console.log(arr.length);

console.log('////////////////////////////////////////////////////');

// 리터럴로 배열 생성
arrL = [1,2,3];
// 생성자 함수로 배열 생성
arrC = new Array(1,2,3); // ''를 안써도 자바스크립트는 숫자를 자동으로 toString 해준다.

console.log('arrL :', arrL);
console.log('arrC :', arrC);

console.log('////////////////////////////////////////////////////');

// 유사 배열 객체
// length 프로퍼티를 사용할 수 있는 객체
var obj = { 
    name: 'noname',
    age: 18,
    gender: 'female'
}
console.log(obj);
Array.prototype.push.apply(obj, ['baz']);
console.log(obj);

console.log('////////////////////////////////////////////////////');

console.log(!!0);
console.log(!!1);
console.log(!!3);
console.log(!!'');
console.log(!!'string');
console.log(!!true);
console.log(!!false);
console.log(!!null);
console.log(!!undefined);