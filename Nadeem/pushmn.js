const arr = [];
const pushvalue = (m,n) => {
    for (let i = m; i <= n; i ++){
        arr.push(i);
    }
}
pushvalue(5,35);
console.log(arr);

let a = 5;
const filteredarr = arr.filter((p) => {
    if (p%10 == a){
        return true;
    }
})
console.log(filteredarr);
