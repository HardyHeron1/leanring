// const duplicate = (n)=>{
//     let arr =[];
//     for(i=0;i<n.length;i++){
//         if(arr.includes(n[i]))
//         return true;
//         else {
//             arr.push(n[i])
//         }
//     }return false;
// }
// console.log(duplicate([1,2,3,4]));

// const palindrome = (n)=>{
//     let a = String(n);
//     let a1= a.split('').reverse().join("")
//     if(a1==a){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(palindrome(242));


// const fib1 = function(a,b,n){
//     if (n==0){
//         return 0;
//     }
//     if (n==1){
//         return b;
//     }
//     return fib1(b,a+b,n-1)
// }
// const fib = function (n){
//     return fib1(0,1,n)
// }
// console.log(fib(4));

const factorial = function (n){
    return factorial1 (1,n)
}
const factorial1 = function(a,n){
    if (n==0){
        return 0;
    }
    if (n==1){
        return a;
    }
    console.log(a,n)
    return factorial1(a*n,n-1);
}
console.log(factorial(5));