1. 콘솔에 출력, script async와 defer의 차이점
   1. 콘솔에 출력
      1. node ``파일명.js``
      2. console에 의한 출력
         1. ``web api``에 의해 실행(브라우저가 제공하는 동작)
      3. [MDN사이트](developer.mozilla.org)에서 javascript 문법 공부
   2. async vs defer(html에서 js를 표현할 때 어느 것이 더 효율적인가?)
      1. ``<head>``안에 ``<script>``를 포함하면 head를 읽을 때 script src를 다운받기 때문에 안좋다.
      2. ``<body>``안에 ``<script>``를 포함하면 script를 늦게 다운받기 때문에 기다려야 됨.
      3. ``<head>``안에 async나 defer써서 ``<script>`` 포함
         1. ``<script async src="main.js"></script>``
            1. ``async``는 ``bool`` type
            2. 병렬로 source를 다운로드 처리
            3. 순서의존적인 스크립트에는 문제가 될 수 있다.
         2.  ``<script defer src="main.js"></script>``
              1.  나중에 다운(sync)
              2.  **가장 낫다.**
      4.  바닐라 스크립트를 통해 작업할 때는 `'use strict';`을 선언하자
          1.  선언되지 않은 변수에 대해서도 자바스크립트는 유연하기 때문에 문제가 없다. 이로 인한 error를 방지하기 위해 사용
2.  Data Types, let vs var, hoisting
    1.  let(mutable)
        1.  { let name="jk"; console.log(name)} -> name 출력(변수를 내부에 숨김)
        2.  `{}`외부의 console.log(name)에서 name은 출력되지 않는다.(global scope가 아니기 때문에)
        3.  아직도 var를 사용하고 있는 사람이 있다면 귀싸대귀를 날려라.
    2.  var(immutable)
        1.  var는 값을 선언하기도 전에 사용할 수 있음.(var hoisting)
        2.  block scope가 없다.
            1.  `{}`에 선언해도 외부에서 값을 볼 수 있음.
    3.  hoisting
        1.  어디에 선언하든지 항상 최상단으로 끌어올리는 것
    4.  const
        1.  할당되면 포인터가 잠김
        2.  할당된 후 변경되면 안되는 값에 사용하라
            1.  security
            2.  thread safety
            3.  reduce human mistakes
    5.  Variable Types
        1.  primitive type
            1.  number
                1.  숫자에 ``n``을 붙이면 big int로 알아들음.
            2.  string
                1.  template literals
                    1.  \`문자 + ${변수}\`
            3.  null
                1.  선언되고 null이 할당
            4.  undefined
                1.  선언되고 아무런 값도 할당되지 않은 것
            5.  symbol
                1.  ``const symbol1 = Symbol('id');``
                2.  ``const symbol2 = Symbol('id');``
                3.  위의 두개는 다르다.
                4.  ``const gSymbol1 = Symbol.for('id');``
                5.  ``const gSymbol1 = Symbol.for('id');``
                6.  두개를 같게 만듬
                7.  출력할 때
                    1.  ``symbol1.description``을 써줘야 됨.
        2.  object
        3.  function
            1.  fiirst-class function(변수로 할당이 가능한 함수)
        4.  ``dynamic typing``은 장단점이 있다.
            1.  자바스크립은 runtime에서 type이 정해지기 때문에 이로 인한 error가 많다.
                1.  그래서 ``TypeScript``가 두두등장
3.  operator, if, loop
    1.  primitive type은 값이 저장
    2.  object type는 값을 가르킨다.
4.  function
5.  arrow function
    1.  Default parameters(added in ES6)
    2.  Rest parameters(added in ES6)
    3.  배열출력
        1.  of
    4.  return 기본값
        1.  undefined
    5.  조건이 맞지 않는 경우를 먼저 함수종료시켜라
    6.  변수형 함수와 함수선언의 차이
        1.  함수선언은 hoisting된다.
    7.  Callback hell
    8.  IIFE(즉시 실행 함수)
6.  OOP
    1.  class(어떤 유형인지(붕어빵틀) 선언만 한다.)
        1.  template
        2.  declare once
        3.  no data in
    2.  기존의 prototype기법을 class로 만듬
    3.  getter와 setter
    4.  pulic & private
        1. class내부에 그냥 변수명만 쓰면 public
        2. #변수명 쓰면 private 
        3. 최신 브라우저에 아직 반영안됨
    5. Static
       1. class안의 object들은 그대로 복사되어 만들어 진다.
       2. 그 중 Object에 상관없이 공통되어 사용되는 method는 static method로 지정하면 중복을 피할 수 있다.
    6. 상속 & 다양성
       1. 이 둘을 이용해서 도형그리기 함수 가능
          1. 오버라이딩 가능
    7. instanceof
       1. 왼쪽이 오른쪽 클래스의 인스턴스인지 아닌지
7. Object
   1. object 생성 방법
      1.  object literal
          1.  ``const obj1 = {}``
      2.  object constructor
          1.  ``const obj2 = new Object();``
   2.  Property value shorthand
       1.  obj안의 key와 value의 이름이 동일하다면 key를 생략 가능
   3.  in operator
       1.  obj안에 해당 key가 있는지 찾는다.
   4.  for..in vs for..of
   5.  clonning
8.  배열
    1.  출력
        1.  for
        2.  for of
        3.  forEach
    2.  Addition, deletion, copy
9.  JSON
    1.  AJAX
        1.  XHR
            1.  XML
    2.  요즘은 JSON을 사용
    3.  Object to JSON
    4.  JSON to Object
        1.  함수는 serialize에 포함안됨
10. Callback
    1.  동기와 비동기의 차이
        1.  sync는 동기
        2.  async는 언제 코드가 실행될 지 모른다.
    2.  자바스크립트는 동기적으로 처리된다.
        1.  Execute the code block by orger after hoisting.
    3.  Callback
        1.  Synchronous callback
        2.  Asynchronous callback
    4.  Callback Hell
        1.  callback하고 callback하고,,,,