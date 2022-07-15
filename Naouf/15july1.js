const arr =[];
const pushvalue = (m,n) =>{
for (let i=m; i<=n; i++){
  arr.push(i);
}
}
pushvalue(5,29);
console.log(arr);
const filter = arr.filter((p) => {
      if (p%10 ==7 ) {
        return true;
      }
    }
  )
  console.log(filter);