
const fibo = function(a,b,n) {
    if (n === 0) {
        return 0;
    }
    if (n===1){
        return b;
    }
    console.log(a,b,n)
    return fibo (b, a+b ,n-1);
    
}
const ba = function (n) {
    return fibo (0,1,n);
}
console.log(ba(5));