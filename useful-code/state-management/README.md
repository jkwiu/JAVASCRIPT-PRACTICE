[참고글]<https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/>

1. 개요
   ![image](img/state-management-restaurant.jpg)
   1. 위와 같이 ``Trailer`` 형식으로 구성
      1. 빈 테이블이 있으면 이벤트를 등록하고 요리사는 구독
      2. Object의 변화가 있으면 ``div``에 반영
2. 핵심구성
   1. Pub/Sub
   2. Store Object
   3. Dispatch and Commit
   4. Drawing Component
3. 시나리오
   1. ``data``가 3초 간격으로 변할 때마다 ``Proxy``에서 이를 감지하고 ``div``에 자동 반영
      1. 순서도
         1. ``div``생성
         2. 3초마다 변하는 ``data`` 생성
         3. ``Proxy``를 이용한 ``Pub/Sub`` 모델 구현
4. 개념
   1. Two-way Binding
      1. 모델(객체)의 속성 값이 업뎃되면, UI도 업뎃되어야 한다.
      2. UI가 없뎃되면, 모델에 그 값을 전파해야 한다.
   2. 순서도
      1. addItem ``button`` 클릭
         1. dispatch('addItem', value) call
            1. status = 'action'로 바꾸고
            2. actions.js에서 addItem(context, payload)을 call
               1. commit('addItem', payload)을 call
               2. status = 'mutation'로 바꾸고
               3. mutations.js에서 addItem(state, payload)을 call
                  1. state.js에서 items에 payload를 추가하고 state배열을 return
                  2. return받은 state를 기존 state에 복사
