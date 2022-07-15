const arr = [];

const pushvalue = (m,n) =>{
for (let i=m; i<=n; i++) {
    arr.push(i);
}
}
pushvalue(3,45);
console.log(arr)

let a = 3;
const filteredarr = arr.filter((p) => {
if ( p%10 == a){
    return true;
    }
})
console.log(filteredarr);
