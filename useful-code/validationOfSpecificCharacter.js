    // 부킹크래스 인풋박스 벨리데이션 체크
    let chkValidation = function(arg){

        let chk = false;

        // 데이터 유효성 검사 O, V, X 데이터는 들어갈 수 없으며 숫자를 제외한 알파벳만 들어갈 수 있다.
        const reg= /^[a-n A-N p-u P-U wW y-z Y-Z ,]+$/;
        if(reg.test(arg)){
            chk = true;
        }
        
        return chk;
    };

    // string to json array
    let strToJsonArr = function(str){

        let arr = [];

        // 콤마( , )의 경우도 문자로 인식되기때문에 콤마를 따로 제거한다.
        let deleteComma = str.replace(/\,/g, "");
        console.log('deleteComma: ', deleteComma);
        // 대문자로 변환
        let toUpper = deleteComma.toUpperCase();
        console.log('toUpper: ', toUpper);
        // 공백제거
        let deleteSpace = toUpper.replace(/(\s*)/g, "");
        console.log('deleteSpace:', deleteSpace);
        // 콤마찍기
        let addComma = String(deleteSpace).replace(/(\D)(?=(?:\D{1})+(?!\D))/g, '$1,');
        console.log('addComma: ', addComma);
        let eachStr = addComma.split(",");
        for ( var i in eachStr ) {
            arr.push(eachStr[i]);
        }
        arr = Array.from(new Set(arr))
        console.log('arr: ', arr);

        return JSON.stringify(arr);
    }

    // null check
    let isNull = function(value){
        if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
            return true 
        }else{ 
            return false 
        } 
    };


// bk class input box의 내용을 json array로 변환
let bkStr = 'a,b,c,d,e,f,g,h';
// validation check
// str to json array
let bkArr = [];

if(!chkValidation(bkStr)){
    alert("데이터가 올바르지 않습니다.");
    // $('#DETAIL_BOOKING_CLASS_JSON').focus();
    return;
}
// console.log('////////////////////////////');
// console.log(strToJsonArr(bkStr));
updateData["DETAIL_BC"] = strToJsonArr(bkStr);