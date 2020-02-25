// this객체의 프로퍼티로 생성하면 외부에서 new키워드로 생성한 객체를 통해 접근이 가능하지만,
// var로 선언된 멤버들은 외부에서 접근이 불가능하다.
// public 메서드가 클로저 역할을 하면서 private 멤버인 name에 접근할 수 있다.
// 이것이 자바스크립트에서 할 수 있는 기본적인 정보 은닉 방법이다.
var Person = function(arg){
    var name = arg ? arg : 'jk';
    this.getName = function(){
        return name;
    }
    this.setName = function(arg){
        name = arg;
    }
};

var me = new Person();
console.log(me.getName());
me.setName('I am JK');
console.log(me.getName());
console.log(me.name);  // output: undefined
// 위의 코드를 조금 더 깔끔하게 다듬어보자.
var Person2 = function(arg){
    var name = arg ? arg : "jk2";
    return {
        getName: function(){
            return name;
        },
        setName: function(arg){
            name = arg;
        }
    };
};
var mine = Person2();  /* or var mine = new Person();  */
console.log(mine.getName());
// 하지만, 위의 코드는 접근하는 private 멤버가 객체나 배열이면 얇은 복사로 참조만을
// 반환하므로 사용자가 이후 이를 쉽게 변경할 수 있다. 다음 예제를 보자
var ArrCreate = function(arg){
    var arr = [1,2,3];
    return {
        getArr: function(){
            return arr;
        }
    };
};
var obj = ArrCreate(); // or new ArrCreate();
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr()); // output: [1,2,3,5]
// 이 때문에 객체를 반환해야 하는 상황에는 객체를 반환하지 않고, 함수를 반환하는 방법이 있다.
var Person3 = function(arg){
    var name = arg ? arg : 'jk3';
    var Func = function(){}
    Func.prototype = {
        getName: function(){
            return name;
        },
        setName: function(arg){
            name = arg;
        }
    };
    return Func;
}();
var he = new Person3();
console.log(he.getName());