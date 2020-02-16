// 객체의 메서드를 호출할 때 this 바인딩
var myObject = {
    name: 'foo',
    sayName: function(){
        console.log(this.name);
    }
}

var otherObject = {
    name: 'bar'
}

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();


// 전역변수를 바인딩하는 this, 잘못된 예(window의 전역변수를 this로 바인딩 해버림)
var value = 100;
var myObject = {
    value : 1,
    func1: function(){
        this.value += 1;
        console.log('func1() called. this.value: ' + this.value);

        func2 = function(){
            this.value += 1;
            console.log('func2() called. this.value: ' + this.value);
            
            func3 = function(){
                this.value += 1;
                console.log('func3() called. this.value: ' + this.value);
            }
            func3();
        }
        func2();
    }
}
myObject.func1();

// 올바른 this 바인딩
var value = 100;
var myObject2 = {
    value: 1,
    func1: function(){
        var that = this;

        this.value += 1;
        console.log('func1() called. this.value: ' + this.value);

        func2 = function(){
            that.value += 1;
            console.log('func2() called. this.value: ' + that.value);    
        

            func3 = function(){
                that.value += 1;
                console.log('func3() called. this.value: ' + that.value);
            }
            func3();
        }
        func2();
    }
};

myObject2.func1();


// 생성자 객체는 첫글자를 대문자로하도록 규약되있다.
// var Person = function(name){
//     this.name = name;
// };

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.name);
console.log(bar.name);

var foo = {
    name: 'foo',
    age: 18,
    gender: 'male'
}
console.dir(foo);

function Person(name, age, gender, position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar', 19, 'male');
console.dir(bar);

// 이렇게하면 window객체로 바인딩 됨
var cat = Person('dd', 12, 'female');
console.dir(cat);   // undefined

var cat = new Person('dcd', 12, 'female');
console.dir(cat); 

// 전문가들의 생성자 코드
function A(arg){
    if(!this instanceof arguments.callee){
        return new A(arg);
    }
    this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
// console.log(b.value);

function Animal(arg){
    // if(!(this instanceof arguments.callee)){
    //     return new arguments.callee(arg);
    // }
    this.name = arg;
    this.age = arg;
    this.gender = arg;
}

var foo = {};
Animal.apply(foo, ['foo',3,'female']);
console.log(foo);
var dudu = {};
Animal.call(dudu, 'dudu',1,'male');
console.log(dudu);

function myFunction(){
    console.dir(arguments);

    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
    args.shift()
    console.dir(args);
}
myFunction(1,2,3);

var myObject = {
    name: 'foo',
    sayName: function(){
        console.log('My name is ' + this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));

function Bird(){
    this.name = name;
}

var foo = new Bird('foo');
Bird.prototype.sayHello = function(){
    console.log('짹짹짹짹');
}
foo.sayHello();

console.log('//////////////////////////////////////////////////');

// 프로토타입 메서드와 this 바인딩
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

var foo = new Person('foo');
console.log(foo.getName());
Person.prototype.name = 'person';
console.log(Person.prototype.getName());

// 디폴트 프로토타입은 다른 객체로 변경이 가능하다
function Person(name){
    this.name = name;
}
console.log(Person.prototype.constructor);

var foo = new Person('foo');
console.log(foo.country);
Person.prototype = {
    country: 'korea'
};
console.log(Person.prototype.constructor);

var bar = new Person('bar');
console.log(foo.constructor);
console.log(bar.constructor);
