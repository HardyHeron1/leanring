var convert = function (a) {
    let str = "";
    const arr = [
        ,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    while (a > 26) {
        let mod = a % 26;
        if (mod == 0) {
            mod = 26;
        }
        str = arr[mod] + str;
        a = Math.floor(a / 26);
        if (mod == 26) {
            a = a - 1;
        }
    }
        str = arr[a] + str;
        return str;
    };
    console.log(convert(78));
