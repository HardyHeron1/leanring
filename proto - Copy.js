const arr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
};

arr.__proto__ = new Array(0);
console.log(arr.push('NAOUF'));
console.log(arr);