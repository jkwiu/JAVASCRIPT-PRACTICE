let counter = 2;
const preIncrement = ++counter;
const preDecrement = --counter;
console.log(preIncrement);
console.log(preDecrement);
console.log(2**2);
console.log('5'==5);
console.log('5'===5);

const browser = 'IE';
switch (browser) {
  case IE:
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}