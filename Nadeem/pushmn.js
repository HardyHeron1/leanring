const arr = [];
const pushvalue = (m,n) => {
    for (let i = m; i <= n; i ++){
        arr.push(i);
    }
}
pushvalue(5,35);
console.log(arr);

const filteredarr = arr.filter((n) => {
    if (n%10 == 7){
        return true;
    }
})
console.log(filteredarr);
