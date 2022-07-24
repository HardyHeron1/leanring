const num = (a) => {
    let sum = 0;

    while (a > 0) {
        let rem = a % 10;
        sum = sum + rem;
        a = Math.floor(a / 10);
        console.log(a);
    }
    return sum;

};

console.log(num(789));
