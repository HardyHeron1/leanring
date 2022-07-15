const a =[];
const pushvalue = () =>{
for (let i=1; i<=200; i++){
  a.push(i);
}
}
pushvalue();
console.log(a);

const filtereda = a.filter((n) => {
  let sqrt = Math.sqrt(n);
  let limit = Math.floor(sqrt);
  console.log(sqrt,limit);
  if (n==1){
    return false;
  }
  for (i=2; i<=limit; i++){
    if (n%i == 0) {
      return false;
    }
    }
    return true;
  }
)
console.log(filtereda);
console.log(filtereda.length);