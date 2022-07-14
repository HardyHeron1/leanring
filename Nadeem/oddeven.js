const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);
const filteredarr = arr.filter ((val) => {
    return (val % 2 === 0)
    
});
const filteredarr1 = arr.filter ((val) => {
    return (val % 2 === 1)
    
});
    console.log(filteredarr1);
    console.log(filteredarr);