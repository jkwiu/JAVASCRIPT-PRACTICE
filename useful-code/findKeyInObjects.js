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


/**
 * Actually I wrote down this code for running ajax in for loop.
 * But, I didn't work. Because ajax code is running seperated from other codes.
 * So I need changing the code like this.
 * 
 * 실제로 for문 안에서 ajax를 돌리기 위해 위의 코드를 작성하였는데, ajax코드는 실제로 다른 코드와 별개로 돌기 때문에
 * 작동하지 않았다. 그렇기 때문에 아래와 같이 바꿔줘야 한다.
 */


require(["jquery","jwork", "jwork.locale.messages","jwork.common.validation",
"jwork-ui-jgrid","jquery.layout","jwork.widget.layerpopup","common-util",
"validation-util"]
,function($, J, JLM){

var preData = {};

function ListAction(){


if(!(this instanceof arguments.callee)){
    return new arguments.callee();
}

this.findDiff = function(obj1, obj2){
    var diff = {};
    for(key in obj1){
        if(obj1[key] === obj2[key]){
            console.log('같음');
        } else {
            console.log('다름');
            diff[key] = obj2[key];
        }
    }
    return diff;
}

this.getList = function(){
    $.ajax({
        type: "POST",
        url: ctx + '/kal/hmp/kalmanage/darksite/getContact.json',
        dataType: "json",
        success: function (response) {

            console.log("success: " + response.message);

            for(key in response.rst){
                var properties =  $('#detailForm').find('#'+key);
                if(properties.is("span")){
                    properties.text(response.rst[key]);
                } else {
                    properties.val(response.rst[key]);
                    // properties.attr("value", response.rst[key]);
                }
            }
            preData = $('#detailForm').serializeObject(); 
        },
        error: function(response){
            console.log('error: ' + response.message);
        }
    });
};

this.modifyList = function(obj){
    var data = {};
    for(key in obj){
        (function(key){
            data[key] = obj[key];
            console.log('Before data object: ', data);
            console.log('/////////////// ajax call !!! ////////////');
            $.ajax({
                type: "POST",
                url: ctx + '/kal/hmp/kalmanage/darksite/modifyContact.json',
                data: data,
                dataType: "json",
                success: function (response) {
                    
                }
            });
        })(key);
        // alert(response.message);
        data = {};
        console.log('////////////// After ajax call /////////');
        console.log('After data object: ', data);
    }
};
}

var contactObj = new ListAction();
contactObj.getList();

window.basicSave = function(){
var chgData = $('#detailForm').serializeObject();
var modifyObj = contactObj.findDiff(preData, chgData);
contactObj.modifyList(modifyObj, chgData);
}
});

