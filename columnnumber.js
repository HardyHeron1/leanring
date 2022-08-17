const obj = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
}

const colFinder = (str)=>{
  let colNumber = 0;
  let strArr = str.split('');
  // if (strArr.length==2) {
  //   for (i=0;i<strArr.length;i++) {
  //     console.log(obj[strArr[i]]);
  //     colNumber = colNumber + obj[strArr[i]]*26+obj[strArr[i+1]];
  //     break;
  //   };
  // }
  //if (strArr.length==1) {
  for (i=0;i<strArr.length;i++) {
    colNumber = colNumber*26 + obj[strArr[i]];
  };
  //}
  // if (strArr.length==3) {
  //   for (i=0;i<strArr.length;i++) {
  //     console.log(obj[strArr[i]]);
  //     colNumber = colNumber + (obj[strArr[i]]*26+obj[strArr[i+1]])*26+obj[strArr[i+2]];
  //     break;
  //   };
  // }
  return colNumber
};
console.log(colFinder("AAB"))