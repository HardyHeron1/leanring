const arr = [];

const pushvalue = () =>{
for (let i=1; i<=200; i++) {
    arr.push(i);
}
}
pushvalue();

const filteredarr = arr.filter ((val) => {
    return (val % 2 === 0)
    
});
const filteredarr1 = arr.filter ((val) => {
    return (val % 2 === 1)
    
});
    console.log(filteredarr1);
    console.log(filteredarr);