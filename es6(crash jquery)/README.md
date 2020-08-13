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