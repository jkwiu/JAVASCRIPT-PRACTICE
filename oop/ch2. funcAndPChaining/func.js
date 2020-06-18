// 함수 선언문
function addS(x,y) {
    return x+y;
}

var rstS = addS(1,2);
console.log(rstS);

// 함수 표현식
var addE = function(x,y){
    return x+y;
}
var rstE = addE;
console.log(addE(1,2));
console.log(rstE(3,4));

console.log('////////////////////////////////////////////////////////');

// 재귀함수
var factorialVar = function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
};

console.log(factorialVar(3));

console.log('////////////////////////////////////////////////////////');

// Function() 생성자를 통한 함수선언
var addF = new Function('x', 'y', 'return x+y');
console.log(addF(3,4));

var funcP = function(x,y){
    return x+y;
};

console.log(funcP(1,2));
funcP.status = "sum";
funcP.result = addF(10,10);

console.log(funcP.name);
console.log(funcP.status);
console.log(funcP.result);

var obj = {
    baz: function(){return 200;}
};
console.log(obj.baz());
obj.minus = function(x,y){
    return x-y;
}
console.log(obj.minus(1,2));

console.log('////////////////////////////////////////////////////////');

var foo = function(func){
    func();
};

foo(function(){
    console.log('짠');
});

function add(x,y){
    return x+y;
}
console.dir(add);

console.log('////////////////////////////////////////////////////////');

// 콜백 함수
var callback = function(){
    console.log('callback');
};

callback();

// 즉시 실행 함수
(function(name){
    console.log('즉시 실행 함수는 ' + name);
})('foo');

// 내부함수
var father = function(){
    var a = 10;
    var b = 20;

    var child = function(){
        var b = 30;

        console.log(a);
        console.log(b);
    }

    return child;
}

var closure = father();
closure();

//함수를 리턴하는 함수
var self = function(){
    console.log('a');
    return function(){
        console.log('b');
        return function(){
            console.log('c')
        }
    }
}
self = self();
self2 = self();
self();
self2();

// argument 객체
function sum(){
    var result = 0;

    for(var i = 0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9));
