const arr = [1,2,4,65,75,76,86,86];
delete(arr[2]);
console.log(arr);

arr[2] = 4;

// arr.splice(2,2);   // delete starfrom position 2 and deletecount = 2

const arr2 = [5,5,5,5];
// inserted into array 
const wer = arr.splice(2,0, ...arr2);
console.log(arr);
console.log(wer);


const ind = arr.indexOf(165);
console.log(ind);
console.log(arr[7]);


/**
 * arr = [23,34,45,786,36,67, 'naouf', 45,78];
 * find position of 'arif' and 'naouf'
 * insert in place of naouf if exist, 'monitor', 'of', 'js', 'class'
 * insert in place of arif if exist, 'look', 'and', 'like', 'seth'
 * 
 */

const problem = (arr) => {
  const indArif = arr.indexOf('arif');
  if (indArif !== -1) {
    arr.splice(indArif, 1, ...['look', 'and', 'like', 'seth']);
  }
  const indNaouf = arr.indexOf('naouf');
  if (indNaouf !== -1) {
    arr.splice(indNaouf, 1, ...['monitor', 'of', 'js', 'class']);
  }
  return arr;
}

console.log(problem([23,34,45,786,36,67, 'naouf', 45,78]));
console.log(problem([23,34,45,786,36,67, 'arif', 45,78]));
console.log(problem([23,34,'arif', 45,786,36,67, 'naouf', 45,78]));
console.log(problem([23,34,45,786,36,67, 45,78]));

