// contructor co Person.prototype
function Person() {
  this.name = '';
  this.age = '';
}

// class cú pháp dễ hiểu tường minh
class Person {
  constructor(a, b) {
    this.name = a;
    this.age = b;
  }
  gioithieu() {
    console.log('toi la Person');
  }
}

var per1 = new Person('su leng', 3);

// OOP
class Student extends Person {
  constructor(name, age, lop) {
    super(name, age);
    this.lopHoc = lop;
  }

  gioithieu() {
    console.log('toi là mới');
  }
}

let st1 = new Student('su leng', 3, 'JSON');
st1.gioithieu();

// Callback

function thucthi(cb) {
  let number1 = 9;
  let number2 = 8;
  cb(number1, number2);
}

thucthi(function (a, b) {
  console.log(a + b);
});

let fs = require('fs');
fs.re;

setTimeout(function () {
  console.log('hello');
}, 1000);

// callback Hell
function congviec1(cb) {
  console.log('thuc thi cong viec 1 ', 'vo gao');
  cb();
}
function congviec2(cb) {
  console.log('thuc thi cong viec 2 ', 'bac noi com');
  cb();
}
function congviec3(cb) {
  console.log('thuc thi cong viec 3 ', 'an com');
  cb();
}

congviec1(function () {
  congviec2(function () {
    congviec3(function () {
      console.log('done');
    });
  });
});

// Tao Promise
var p1 = new Promise(function (resolve, reject) {
  // resolve(8);
  // reject('ABC');
});

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
