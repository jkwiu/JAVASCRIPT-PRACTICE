/**
 * ----------------------------- 클래스, 생성자, 메서드 -------------------
 */
// 잘못된 방식의 클래스 생성
// 다음과 같이 할 경우, 각 객체가 생성될 때마다 함수들이 생성되어 메모리 낭비가 된다.
function Person(arg){
    this.name = arg;

    this.getName = function(){
        return this.name;
    }

    this.setName = function(value){
        this.name = value;
    }
}

var me = new Person("me");
var you = new Person('you');
console.log(me.getName());
console.log(you.getName());

// 다음과 같이 prototype property를 이용하면, 
// 각 객체는 함수 객체를 생성할 필요 없이 프로토타입 체인으로 접근할 수 있다.
function Person2(arg){
    this.name = arg;
}
Person2.prototype.getName = function(){
    return this.name;
}
Person2.setName = function(value){
    this.name = value;
}
var me = new Person2('me');
var you = new Person2('you');
console.log(me.getName());
console.log(you.getName());
// 더글라스 형님의 메서드 정의 방법
Function.prototype.method = function(name, func){
    if(!this.prototype[name]){
        this.prototype[name] = func;
    }
}
// 이는 곧, 아래와 같이
Function.prototype.method2 = function(name, func){
    this.prototype[name] = func;
}
var Person3 = function(arg){
    this.name = arg;
};
Person3.method2("setName", function(value){
    this.name = value;
});
Person3.method2("getName", function(){
    return this.name;
});
var me2 = new Person3("me2");
var you2 = new Person3("you2");
console.log(me2.getName());
console.log(you2.getName());
// 하지만, 우리의 더글라스 형님은 함수형으로 생성자를 생성하는 것을
// 좋아하지 않는다. 왜냐면 직접호출과 new로 호출될 때 this의 바인딩이 달라지기 때문이다.
// 다 알겠지만 this바인딩의 경우 window객체와 같은 전역변수에 바인딩이 된다.
// 그래서 다음과 같은 방식을 추천하드라라라라라라라.....
/**
 * --------------------------- 상속 ----------------------------
 */
function create_object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
var person4 = {
    name: 'FOO',
    getName: function(){
        return this.name;
    },
    setName: function(arg){
        this.name = arg;
    }
};
var student = create_object(person4);
student.setName('me4');
console.log(student.getName());
// 기능 확장
// 보통 extend()를 사용한다. 다음과 같이 jquery의 기능을 확장시킬 수 있다.
// extend함수로 자신의 함수 혹은 객체를 추가할때, 이름이 충돌하지 않게 주의할 것
// (function($){
//     $.extend($.fn, {
//         my_func: function(){
//             ////////
//         }
//     });
// })(jQuery);
// $.my_func();
// 자, 이제 extend 함수를 이용하여 활용하여 보자
var person5 = {
    name: 'jk',
    getName: function(){
        return this.name;
    },
    setName: function(arg){
        this.name = arg;
    }
};
// 상속
function create_object(o){
    function F() {};
    F.prototype = o;
    return new F();
}
// 기능 확장
function extend(obj, prop){
    if(!prop){prop = obj; obj = this;}
    for(var i in prop) obj[i] = prop[i];
    return obj;
};
var student2 = create_object(person5);
var added = {
    setAge: function(age){
        this.age = age;
    },
    getAge: function(){
        return this.age;
    }
};
extend(student2, added);
student2.setAge(25);
console.log(student2.getAge());
