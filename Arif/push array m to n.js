const arr = [];

const pushvalue = (m, n) => {
  for (let i = m; i <= n; i++) {
    arr.push(i);
  }
};
pushvalue(1, 100);

let a = 9;
const filterByA = (a) => {
  const filteredarr = arr.filter((p) => {
    if (p % 10 === a) {
      return true;
    }
    return false;
  });
  return filteredarr;
};
const yuyu = filterByA(7);
console.log(filterByA(6));
console.log(yuyu);
