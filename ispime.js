function prime(n){
  let sqrt = Math.sqrt(n);
  let limit = Math.ceil(sqrt);
  console.log(sqrt, limit);
  for(i=2;i<limit;i=i+1){
    if(n%i==0){
      return false;
    }
  }
  return true;
}
console.log(prime(23));
console.log(prime(24));
console.log(prime(29));