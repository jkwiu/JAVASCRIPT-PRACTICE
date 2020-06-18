1. 콘솔에 출력, script async와 defer의 차이점
   1. 콘솔에 출력
      1. node ``파일명.js``
      2. console에 의한 출력
         1. web api에 의해 실행(브라우저가 제공하는 동작)
      3. [MDN사이트](developer.mozilla.org)에서 javascript 문법 공부
   2. async vs defer(html에서 js를 표현할 때 어느 것이 더 효율적인가?)
      1. ``<script async src="main.js"></script>``
         1. ``async``는 ``bool`` type
         2. 병렬로 source를 다운로드 처리
      2.  ``<script defer src="main.js"></script>``
          1.  나중에 다운(sync)
      3.  바닐라 스크립트를 통해 작업할 때는 `'use strict';`을 선언하자
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