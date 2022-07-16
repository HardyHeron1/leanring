const arr = [1,3,5,56,7,34,4564,56,45,234];

console.log(arr);
const filtera = (a) => {
  const filteredarr = arr.filter((val) => {
    return (val % 10 === a);
  });
  return filteredarr;
};


console.log(filteredarr);