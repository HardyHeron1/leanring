const removeouter = (s) => {
    let sp = s.split("");
    sp.pop();
    sp.shift();
    console.log(sp);

    let a = [];
    let b = [];
    for (let i of sp) {
        if (i == "(") {
            a.push(i);
        }
        else if (i == ")" && a[a.length - 1] == "(") {
            {
                b.push(a[a.length - 1], i)
                a.pop();
                console.log(b);
            }
            c = b.join("");
            console.log(c);
        }
    }
}

removeouter("(()())(())(()(()))");