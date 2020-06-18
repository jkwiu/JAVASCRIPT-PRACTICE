// subClass 상속 예제
function subClass(obj){
    var parent = this === window ? Function : this; // 최상위 클래스면 Function을 아니면 parent를 호출
    var F = function(){};   // 중개자인 빈 객체를 생성
    var child = function(){
        var _parent = child.parent;
        if(_parent && _parent !== Function){    // 재귀적인 방법으로 부모의 자식의 자식을 이어준다
            _parent.apply(this, arguments);
        }
        if(child.prototype._init){
            child.prototype._init.apply(this, arguments);
        }
    };
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent;
    child.subClass = arguments.callee;
    for(var i in obj){
        if(obj.hasOwnProperty(i)){  // 해당 프로퍼티가 있는지 체크한 뒤 상속받을 함수를 복사
            child.prototype[i] = obj[i];
        }
    }
    return child;
}

var person_obj = {
    _init : function(){
        console.log("person init");
    },
    getName: function(){
        return this._name;
    },
    setName: function(name){
        this._name = name;
    }
};
var student_obj = {
    _init: function(){
        console.log("student init");
    },
    getName: function(){
        return "Student Name:" + this._name;
    }
};

var Person = subClass(person_obj);
var person = new Person();
person.setName("jk");
console.log(person.getName());
var Student = Person.subClass(student_obj);
var student = new Student();
student.setName("jk student");
console.log(student.getName());
console.log(Person.toString());

var person2 = function(arg){
    var name = undefined;

    return {
        _init: function(arg){
            name = arg ? arg : "jk";
        },
        getName: function(){
            return name;
        },
        setName: function(arg){
            name = arg;
        }
    };
}
Person = subClass(person());
var iamjk = new Person("iamjk");
console.log(iamjk.getName());
Student = Person.subClass();
var student = new Student("student");
console.log(student.getName());