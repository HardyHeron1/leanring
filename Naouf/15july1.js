const arr =[];
const pushvalue = (m,n) =>{
for (let i=m; i<=n; i++){
  arr.push(i);
}
}
pushvalue(5,29);
console.log(arr);
const filter = arr.filter((p) => {
    for (i=1; i<=p; i++){
      if (p%10 ==7 ) {
        return true;
      }
      }
      return false;
    }
  )
  console.log(filter);