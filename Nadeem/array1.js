const arr1 = [];
const pushValue = (m) => {
  for(let i=m; i<=m+6; i++)
  {
    arr1.push(i);
  }
}
pushValue(45);
console.log(arr1);
const filteredarr1 = arr1.filter ((val) =>{
  return (val%4 ===0)
});
console.log(filteredarr1);