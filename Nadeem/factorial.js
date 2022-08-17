const fact = function(a,n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return a;
    }
    return fact(a*n, n-1)               
}
const fact1 = function(n){
    return fact(1,n);
}

console.log(fact1(6));