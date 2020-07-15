'use strict';

console.log('1');
// asynchronous
// 이런걸 callback 함수라고 함
setTimeout(() => console.log('2'), 1000)
console.log('3');

// 1.  Synchronous callback
function printImmediately(print){
  print();
}
printImmediately(() => console.log('hello'));

// 2.  Asynchronous callback
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Calllback Hell example
class UserStorage{
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if (user === 'ellie'){
        onSuccess({name: 'ellie', role: 'admin'})
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  (user) => {
    userStorage.getRoles(
      user, 
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error)
  }
);