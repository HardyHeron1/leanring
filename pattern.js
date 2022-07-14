/*
Print the following::

    1
   21
  321
 4321
54321

*/

function pattern() {
  for(let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 5; j >= 1; j--) {
      if (j <= i) {
        str = str + j;
      } else {
        str = str + ' ';
      }
    }
    console.log(str);
  }
}
pattern();

let arr = [];
for(let i=1; i<=100; i++) {
  arr.push(i);
}

console.log(arr);
arr.pop(12);
console.log(arr);