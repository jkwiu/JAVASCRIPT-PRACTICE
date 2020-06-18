function outer(){
    var x = 10;
    function inner() {
        console.log(x);
    }
    return inner();
}
var inner = outer;
inner();

function outerFunc(arg1, arg2){
    var local = 8;
    function innerFunc(innerArg){
        console.log((arg1 + arg2)/(innerArg + local));
    }
    return innerFunc;
}
var exam1 = outerFunc(2,4);
exam1(2);

console.log('/////////////////////////////////////////////////////');

// 클로저의 활용
// 특정 함수에 사용자가 정의한 객체의 메서드 연결하기
function Hello(){
    this.greeting = "hello";
}
Hello.prototype.call = function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}
var newFunc = function(greeting){
    console.log(greeting);
}

var obj1 = new Hello();
obj1.func = newFunc;
obj1.call();

// 특정함수에 다른 인자를 넣어서 호출하고 싶을 때
function saySomething(obj, methodName, name){
    return (function(greeting){
        return obj[methodName](greeting, name);
    });
}
function newObj(obj, name){
    obj.func = saySomething(this, "who", name);
    return obj;
}
newObj.prototype.who = function(greeting, name){
    console.log(greeting, (name || "everyone"));
}

var obj2 = new newObj(obj1, "jk");
obj2.call();

// 함수의 캡슐화
// 사용자에게 인자로 입력을 받아 값을 출력하는 함수
var buffArr = [
    'I am',
    '',
    '. I live in',
    '',
    '. I\'am ',
    '',
    ' years old.',
];

function getCompletedStr(name, city, age){
    buffArr[1] = name;
    buffArr[3] = city;
    buffArr[5] = age;

    return buffArr.join('');
}

var str = getCompletedStr('jk', 'seoul', 16);
console.log(str);

console.log('////////////////////////////////////////////////////////////////////////');

//위를 캡슐화
var getCompletedStr2 = (function(){
    var buffArr2 = [
        'I am',
        '',
        '. I live in ',
        '',
        '. I\'am ',
        '',
        ' years old.',
    ];

    return (function(name, city, age){
        buffArr2[1] = name;
        buffArr2[3] = city;
        buffArr2[5] = age;

        return buffArr2.join('');
    });
})();

var str = getCompletedStr2("jk", "seoul", 16);
console.log(str);


//setTimeout()에 지정되는 함수의 사용자 정의
function callLater(obj, a, b){
    return (function(){
        obj["sum"] = a + b;
        console.log(obj["sum"]);
    });
}
var sumObj = {
    sum: 0
};
var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);


// 주의사항
function outerFunc(argNum){
    var num = argNum;
    return function(x){
        num += x;
        console.log('num: ' + num);
    }
}
var exam = outerFunc(40);
exam(5);
exam(10);   // 값이 계속 덮어 써짐


function funcT(){
    var x = 1;
    return {
        func1: function(){console.log(++x);},
        func2: function(){console.log(-x);}
    };
};

var exam1 = funcT();
exam1.func1();
exam1.func2();


function countSeconds(howMany){
    for(var i=1; i<=howMany; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
};
// countSeconds(3);


function countSeconds2(howMany){
    for(var i=1; i<=howMany; i++){
        (function (currentI){
            setTimeout(function(){
                console.log(currentI);
            }, currentI * 1000);
        }(i));
    }
};
countSeconds2(3);
