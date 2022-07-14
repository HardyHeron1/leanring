const arr1 = [];
const pushValue = (m) => {
  for(let i=m; i<=200; i++)
  {
    arr1.push(i);
  }
}
pushValue(1);
const filteredarr1 = arr1.filter ((val) =>{
  return (val%2 ===1)
});
console.log(filteredarr1);