// Object()를 이용해서 foo의 빈 객체 생성
var foo = new Object();
// foo 객체의 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);

//리터럴 방식으로 객체 생성
var foo2 = {
    name: 'foo',
    age: 30,
    gender: 'male'
}

console.log(typeof foo2);
console.log(foo2);

//생성자 함수로 객체 생성 2장에서 다룸

// 객체 퍼로퍼티 읽기/쓰기/갱신
// 프로퍼티가 예약식이거나 표현식의 경우 대괄호로 접근
// 그외에는 점으로 접근
console.log(foo2.age, foo2['age']);
// 예를 들어 프로퍼티가 foo-name일 경우 컴퓨터는 빼기로 인식하기 때문에 NaN(Not a Number)가 뜸

// for in을 아용한 프로퍼티 출력
delete foo2.age;
for (var prop in foo2) {
    console.log(prop, ':', foo2[prop]);  
}
console.log(foo2.age);

console.log(foo2.toString());
console.log(foo2);
console.dir(foo2);