function f2() {
  let x = 0;
  let y = x++;
  console.log('hello', y);
}

function test() {
  console.log('1');
  console.log('2');
  f2();
}

test();