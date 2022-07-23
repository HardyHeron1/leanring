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
const no = (p)=>{
  p=p.toUpperCase();
  let num = 0;
  for(i=0;i<=p.length-1;i++){
    num = 26**i * obj[p.charAt(p.length-1-i)]+num;
  }
  return num;
}
console.log(no("az"));