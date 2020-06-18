// SuperClass를 상속받는 subClass를 만들고자 할 때, SuperClass.subClass()의 형식으로 호출하게 구현한다.
var SuperClass = subClass(obj);
var SubClass = SuperClass.subClass(obj);
// 함수 subClass의 구조는 다음과 같이 구성된다.
function subClass(obj){
    /**
     * 1) 자식 클래스(함수객체) 생성
     * 2) 생성자 호출
     * 3) 프로토타입 체인을 활용한 상속 구현
     * 4) obj를 통해 들어온 변수 및 메서드를 자식 클래스에 추가
     * 5) 자식 함수 객체 반환
     */
}

function subClass2(obj){
    var parent = this;
    var F = function(){};
    var child = function(){
    };
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent.prototype;
    child.parent.constructor = parent;
    return child;
}
// 사용자가 인자로 넣은 객체를 자식클래스에 넣어 자식클래스를 확장한다.
for(var i in obj){
    if(obj.hasOwnProperty(i)){ // hasOwnProperty는 인자로 넘기는 이름에 해당 프로퍼티가 객체 내에 있는지를 판단해준다.
        child.prototype[i] = obj[i];
    }
}
// 클래스의 인스턴스가 생성될 때, 클래스 내에 정의된 생성자가 호출되야하며 부모 클래스의 생성자 역시 호출되어야 한다. 이를 구현한다.
var child = function(){
    var parent = child.parent;
    if(parent_init){ // 여기서는 init을 생성자로 정의한다.
        parent._init.apply(this, arguments);
    }
    if(child.prototype._init){
        child.prototype._init.apply(this, arguments);
    }
};
// 하지만, 위의 코드는 child.prototype._init을 찾을 때, _init프로퍼티가 없으면 상위 클래스의 _init함수를 찾아서 호출하기 때문에 문제가 있다.
var child2 = function(){
    var parent = child2.parent;
    if(parent.hasOwnProperty("_init")){
        parent._init.apply(this, arguments);
    }
    if(child.prototype.hasOwnProperty("_init")){
        child2.prototype._init.apply(this, arguments);
    }
};
// 그러나, 위의 코드는 부모와 자식이 한 쌍을 이뤘을 때만 제대로 동작한다.
// 자식을 또 다른 함수가 다시 상속 받았을 때 부모이 생성자가 호출되지 않는다. 그러므로
var child3 = function(){
    var _parent = child.parent._constructor;
    if(_parent && _parent !== Function){    // 현재 클래스의 부모 생성자가 있으면 그 함수를 호출한다. 다만 부모가 Function인 경우에는 최상위 클래스에 도달했으므로, 실행되지 않는다.
        _parent.apply(this, arguments); // 부모 함수의 재귀적 호출
    }
    if(child3.prototype.hasOwnProperty("_init")){
        child3.prototype._init.apply(this, arguments);
    }
};
// 다음은 subClass 보완 코드다
// parent를 단순히 this.prototype로 지정해서는 안된다. 최상위 클래스를 Function을 상속받는 것으로 정했는데, 이를 처리하는 코드가 필요하다
// parent = this;를 다음과 같이 수정한다.
if(this === window){
    var parent = Function;
} else {
    var parent = this;
}
// 더 깔끔하게
var parent = this === window ? Function : this;
// 하나 더, subClass 안에서 생성하는 자식 클래스의 역할을 하는 함수는 subClass함수가 있어야 한다.
child3.subClass = arguments.callee;
// 자 마무리로 이 모든 것을 종합해보자
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
