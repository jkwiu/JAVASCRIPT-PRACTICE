// 출 도착지 중복 체크용 오브젝트
let DaObj = function () {};

const testObj = new DaObj();

// 갯수에 맞춰 오브젝트 생성
let createObj = function (num) {
  testObj['obj' + num] = new DaObj();
};

arr1 = ['ICN', 'ICN', 'KRE', 'ICN', 'JPN', 'ICN'];
arr2 = ['KMP', 'ACR', 'FUC', 'CHN', 'ARO', 'AAA'];

for (let i = 0; i < arr1.length; i++) {
  createObj(i);
  testObj['obj' + i][arr1[i]] = arr2[i];
  // console.log(testObj);
}
// 출도착지 중복 입력 체크
let isOverlapDnA = function (arr1, arr2) {
  let equalCnt = 0;
  let chk = true;
  for (let i = 0; i < arr1.length; i++) {
    let str = arr1[i];
    for (let j = 0; j < arr1.length; j++) {
      if (j != i) {
        if (testObj['obj' + i][str] == testObj['obj' + j][str]) {
          console.log(
            '같음',
            testObj['obj' + i],
            ' 와 ',
            testObj['obj' + j],
            '  obj' + i + '  obj' + j
          );
          equalCnt++;
        } else {
          console.log(
            '다름',
            testObj['obj' + i],
            ' 와 ',
            testObj['obj' + j],
            '  obj' + i + '  obj' + j
          );
        }
      }
    }
  }
  if (equalCnt == 0) {
    chk = false;
  }
  return chk;
};
console.log(isOverlapDnA(arr1, arr2));
