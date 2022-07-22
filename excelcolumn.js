var convertToTitle = function (columnNumber) {
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
  while (columnNumber > 26) {
    let mod = columnNumber % 26;
    if (mod === 0) {
      mod = 26;
    }
    str = arr[mod] + str;
    columnNumber = Math.floor(columnNumber / 26);
    if (mod === 26) {
      columnNumber = columnNumber - 1;
    }
  }
  str = arr[columnNumber] + str;
  return str;
};

console.log(convertToTitle(78));
