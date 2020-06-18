/**
 * f1 = encrypt1;
 * f2 = encrypt2;
 * f3 = encrypt3;
 * f1, f2, f3는 서로 다른 암호화 알고리즘이다.
 * pure_value = "jk";   암호화할 문자열
 * encrypted_value = get_encrypted(x);  암호화 된 문자열
 * 
 * encrypted_value = get_encrypted(f1);
 * encrypted_value = get_encrypted(f2);
 * encrypted_value = get_encrypted(f3);
 */
var f1 = function(input){
    var result;
    // 암호화 작업 수행
    result = 1;
    return result;
};
var f2 = function(input){
    var result;
    result = 2;
    return result;
};
var f3 = function(input){
    var result;
    result = 3;
    return result;
};
var get_encrypted = function(func){
    var str = "jk";
    return function(){
        return func.call(null, str);
    };
};
var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);

// 배열의 각 원소 총합 구하기
function sum(arr){
    var len = arr.length;
    var i = 0, sum = 0;
    for(; i<len; i++){
        sum += arr[i]; 
    }   
    return sum;
}
var arr = [1,2,3,4];
console.log(sum(arr));
// 배열의 원소를 모두 곱한 값을 구하기
function multiply(arr){
    var len = arr.length;
    var i = 0, result = 1;
    for(; i<len; i++){
        result *= arr[i];
    }
    return result;
}
var arr = [1,2,3,4];
console.log(multiply(arr));
// 위는 문제 하나하나를 각각의 함수로 구현하여 문제를 풀고 있다. 배열의 각 원소를 또 다른 방식으로 산술하여 결과값을 얻으려면 새로운 함수를 다시 구현해야 한다.
// 하지만, 함수형 프로그래밍을 이용하면 이러한 수고를 덜 수 있다.
function reduce(func, arr, memo){
    var len = arr.length;
        i = 0,
        accum = memo;
    for(; i<len; i++){
        accum = func(accum, arr[i]);
    }
    return accum;
}
// reduce()함수는 루프를 돌면서 얻은 결과 값을 변수 accum에 계속해서 저장한다.
var arr = [1,2,3,4];
var sum = function(x,y){
    return x+y;
};
var multiply = function(x,y){
    return x*y;
}
console.log(reduce(sum, arr, 0));
console.log(reduce(multiply, arr, 1));
/**
 * ----------------- 팩토리얼 -----------------
 */
function fact(num){
    var val = 1;
    for(var i = 2; i<=num; i++)
        val = val * i;
    return val;
}
console.log(fact(100));
function fact2(num){
    if(num == 0) return 1;
    else return num*fact2(num-1);
}
console.log(fact2(100));
// 성능을 고려해 보자. 위의 함수는 10!을 수행한 뒤 20!를 실행하면 앞의 10!을 중복하여 계산한다. 하지만, 다음과 같이하면 성능 향상에 도움이 된다.
// 캐시를 사용하여 이전의 값들을 캐시에 저장한다.
// 이를 메모이제이션 패턴이라고 한다.
var fact3 = function(){
    var cache = {'0': 1};
    var func = function(n){
        var result = 0;
        if(typeof(cache[n]) === 'number'){
            result = cache[n];
        } else {
            result = cache[n] = n*func(n-1);
        }
        return result;
    }
    return func;
}();
console.log(fact3(10));
console.log(fact3(20));

/**
 * ---------------------------- 피보나치 수열 ---------------------------------
 */
var fibo = function(){
    var cache = {'0': 0, '1': 1};

    var func = function(n){
        if(typeof(cache[n]) == 'number'){
            result = cache[n];
        } else {
            result = cache[n] = func(n-1) + func(n-2);
        }
        return result;
    }
    return func;
}();
console.log(fibo(10));
// 위의 팩토리얼과 피보나치 수열을 계산하는 함수를 인자로 받는 함수
var cacher = function(cache, func){
    var caculate = function(n){
        if(typeof(cache[n]) === 'number'){
            result = cache[n];
        } else {
            result = cache[n] = func(caculate, n);
        }
        return result;
    }
    return caculate;
};
var fact4 = cacher({'0': 1}, function(func, n){
    return n * func(n-1);
});
var fibo2 = cacher({'0': 0, '1': 1}, function(func, n){
    return func(n-1) + func(n-2);
});
console.log(fact4(10));
console.log(fibo2(10));