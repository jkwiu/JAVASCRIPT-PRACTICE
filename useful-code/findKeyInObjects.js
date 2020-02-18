// This is Code for finding different keys between in Two Objects,
// then Do something!!

var preData = {
    property: {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        e: 'e'
    }
};
var chgData = {
    property: {
        a: 'ab',
        b: 'b',
        c: 'c',
        d: 'a',
        e: 'ca'
    }
};

var pre = preData.property;
var chg = chgData.property;

function CrudUtil(){
    if(!this instanceof arguments.callee){
        return new arguments.callee();
    }
    this.findDiff = function(obj1, obj2){
        var diff = [];
        for(key in obj1){
            if(obj1[key] === obj2[key]){
                console.log('같음');
            } else {
                console.log('다름');
                diff.push(key); 
            }
        }
        console.log('diff properties: ', diff);
        return diff;
    }
    this.saveUtil = function(arr){
        arr.forEach(function(entry){
            // do something with objects found!!!
            var data = {
                entry: chg[entry]
            }
            console.log(data,"의 데이터", data.entry,"가 저장되었습니다.");
        });
    }
}

var obj = new CrudUtil();
// obj.saveUtil(obj.findDiff(pre, chg));
obj.findDiff(pre, chg);


