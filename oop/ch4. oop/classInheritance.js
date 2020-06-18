// 클래스 기반의 상속
function Person(arg){
    this.name = arg;
}
Person.prototype.setName = function(value){
    this.name = value;
};
Person.prototype.getName = function(){
    return this.name;
};
function Student(arg){
}
var you = new Person("iamJK");
Student.prototype = you;
var me = new Student("student jk");
// me.setName("student jk");
console.log(me.getName());
// 위 코드는 부모의 생성자를 호출하지 않는 문제가 있다. 그러므로 다음의 코드가 필요하다.
function Student2(arg){
    Person.apply(this, arguments);
}
var he = new Person('he');
Student2.prototype = he;
var she = new Student2('she');
console.log(she.getName());
// 위의 방법은 부모 클래스와 자식 클래스의 인스턴스가 독립적이지 않다.
// 그러므로 중개자를 만들어 준다.
function Person2(arg){
    this.name = arg;
}
Function.prototype.method = function(name, func){
    this.prototype[name] = func;
}
Person2.method('setName', function(value){
    this.name = value;
});
Person2.method('getName', function(){
    return this.name;
});
function Student3(arg){
}
function F(){};
F.prototype = Person2.prototype;
Student3.prototype = new F();
Student3.prototype.constructor = Student3;
Student3.super = Person2.prototype;
var mine = new Student3();
mine.setName('mine');
console.log(mine.getName());
// 즉시 실행함수와 클로저를 활용한 최적화 상속 코드
var inherit = function(Parent, Child){
    var F = function(){};
    return function(Parent, Child){
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };
}();