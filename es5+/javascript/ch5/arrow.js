const jk = {name: 'jk'};
function changeName(obj){
  obj.name = 'changed';
}
changeName(jk);
console.log(jk);

// default parameter
function showMessage(message, from = 'unknown'){
  console.log(`${message} by ${from}`);
}
showMessage('HI!');

// Rest parameters
function printAll(...args){
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll('jk', 'is', 'the best');

// Callback Hell
function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function(){
  console.log('yes');
};

// named function
const printNo = function print(){
  console.log('no');
};

// arrow function
const simplePrint = () => console.log('simplePrint');
const add = function(a, b){
  console.log(a+b);
}
const arrowAdd = (a, b) => a+b;

// IIFE
(function hello() {
  console.log('IIFE');
})();