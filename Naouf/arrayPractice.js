const arr = [1,3,5,56,7,34,4564,56,45,234];

console.log(arr);
const filteredarr = arr.filter((val) => {
  return (val % 3 === 0);
});

console.log(filteredarr);