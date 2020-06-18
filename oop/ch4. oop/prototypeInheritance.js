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
