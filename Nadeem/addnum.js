const num = (a) => {
    const b = String(a);
    const c = b.split("");
    let sum = 0;
    c.forEach((d)=>{
        sum = sum + parseInt(d);
    })
    return sum;
};

console.log(num(789));
