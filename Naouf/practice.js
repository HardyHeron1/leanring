Fruits ={
    banana:10,
    apple:15,
    chikko:12,
    peru:9
}
arr = Object.entries(Fruits);
console.log(arr);
ar = Object.fromEntries(arr);
console.log(ar);

ap=Object.entries(Fruits)
console.log(ap);
console.log(ap.map(entry => [entry[0]+" price",entry[1]*3]));
value = Object.values(Fruits).reduce((a,b)=>a+b);
console.log(value);
let date = new Date("2022-08-10")
console.log(date);
