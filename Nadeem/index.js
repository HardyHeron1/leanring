const arr = [2, 3, 4, 5, 55, 56, 'java', 'python', 87, 45];

const ind = arr.indexOf('java');
if (ind !== -1){
    const print = arr.splice(ind, 1,'I','Like','Java');
}
console.log(arr);


const ind1 = arr.indexOf('python')
if (ind1 !== -1){
    const print = arr.splice(ind1 +1, 0,'phython','is','easy');
}
console.log(arr);

console.log(arr);
console.log(ind);
console.log(ind1);

