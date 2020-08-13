1. Proxy와 Reflect(es6)
   1. Proxy
      1. ``Proxy(target, {})``
      2. target(객체)의 동작을 가로채어 사용할 수 있다.
      3. 요소
         1. target
            1. 대상 객체
         2. handler
            1. ``target``의 동작을 감지하여 해당 trap이 있을경우 실행
         3. trap
            1. get
               1. ``target``의 property에서 해당 ``trap``이 있는지 reading
            2. set
               1. ``target``의 property를 ``trap``으로 writing
   2. Reflect
      1.  기존의 ``Object``객체로 접근하여 메서드를 실행했던 것을 이것으로 접근하여 실행할 수 있다.
      2.  example
          1.  ``Reflect.get(obj, 'a')``
          2.  ``Reflect.set(obj, 'd', ['arg1', 'arg2'])``
          3.  ``Reflect.has(obj, 'b')``
   3. React에 관해
      1. Component 기반이므로 재사용성이 높아 효율적
         1. 종류
            1. 클래스형(stateful)
            2. 함수형(stateless)
      2. ``data``가 ``one-way-flow``이기 때문에 부모의 ``data``를 바꿔주려면 ``state``를 이용하여야 한다.
      3. prop와 state
         1. prop
            1. 부모 component에서 자식 component로 전달해주는 data, 자식 component에서는 변경 불가
         2. state
            1. 동적인 data를 다룰 때 사용하며 class형 component가 사용됨
      4. **Virtual DOM**
         1. 가상의 ``Document Object Model``
         2. **기존에는 html코드의 일부가 수정되도 전체 DOM을 새로 rendering해서 비효율적이었지만, react는 가상의 dom을 형성하여 진짜 DOM과 비교하였을 때, 변경된 부분만 있으면 그 부분만 변경된 DOM을 반영한다. **