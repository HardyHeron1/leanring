const obj = {
  name: "look n like",
  address: "Padegaon, Near Mental hospital, Nashik road",
  owner: "Abdullah Khan",
  employee: [
    { name: "osama", age: 28, designation: "ceo", salary: 50000 },
    { name: "Arif", age: 34, designation: "coo", salary: 25000 },
    { name: "sakib", age: 24, designation: "staff", salary: 5000 },
    { name: "sahil", age: 18, designation: "staff", salary: 4000 },
    { name: "zaid", age: 16, designation: "staff", salary: 5000 },
    { name: "ali", age: 8, designation: "staff", salary: 500 },
  ],
  product: [
    {
      name: "sofa",
      type: "furniture",
      color: "brown",
      price: 25000,
      brand: "abd",
      stockQty: 3,
    },
    {
      name: "sofa",
      type: "furniture",
      color: "blue",
      price: 20000,
      brand: "abd",
      stockQty: 4,
    },
    {
      name: "sofa",
      type: "furniture",
      color: "green",
      price: 24500,
      brand: "abd",
      stockQty: 5,
    },
    {
      name: "curtain",
      type: "household",
      color: "red",
      price: 250,
      brand: "abd",
      stockQty: 10,
    },
    {
      name: "curtain",
      type: "household",
      color: "blue",
      price: 350,
      brand: "abd",
      stockQty: 10,
    },
    {
      name: "curtain",
      type: "household",
      color: "green",
      price: 450,
      brand: "abd",
      stockQty: 0,
    },
    {
      name: "curtain",
      type: "household",
      color: "white",
      price: 300,
      brand: "abd",
      stockQty: 10,
    },
    {
      name: "table",
      type: "furniture",
      color: "brown",
      price: 2500,
      brand: "abd",
      stockQty: 3,
    },
    {
      name: "table",
      type: "furniture",
      color: "blue",
      price: 2000,
      brand: "abd",
      stockQty: 0,
    },
    {
      name: "table",
      type: "furniture",
      color: "green",
      price: 2450,
      brand: "abd",
      stockQty: 5,
    },
    {
      name: "mattress",
      type: "home",
      color: "brown",
      price: 12000,
      brand: "abd",
      stockQty: 5,
    },
    {
      name: "mattress",
      type: "home",
      color: "green",
      price: 12500,
      brand: "abd",
      stockQty: 5,
    },
    {
      name: "mattress",
      type: "home",
      color: "red",
      price: 13000,
      brand: "abd",
      stockQty: 0,
    },
    {
      name: "mattress",
      type: "home",
      color: "black",
      price: 14000,
      brand: "abd",
      stockQty: 5,
    },
  ],
};

obj.address = obj.address.replace('Mental', 'Qadri');
console.log(obj.address);

const underageemployee = obj.employee.filter((p) => {
  return p.age <= 18;
});
const resurname = obj.owner.split(" ");
resurname.splice(resurname.length - 1, 1, "bhai");
obj.owner = resurname.join(" ");
//console.log(obj.owner);
//console.log(underageemployee);
const emptystock = obj.product.filter((c) => {
  return c.stockQty == 0;
});
//console.log(resurname);
//console.log(obj);
console.log(emptystock);
let num = 0;
obj.product.forEach((p) => {
  num = num + p.stockQty;
});
console.log(num);
let num1 = 0;
const a = obj.employee.forEach((p) => {
  if( p.designation == "staff") {
    num1 = num1 + 1;
  }
});
console.log(a);
console.log(num1);

let num2 = 0;
const b = obj.product.forEach((i) => {
  if (i.stockQty >= 10) {
    num2 = num2 + 1;
  }

});
console.log(num2);

obj.employee.forEach((p) => {
  p.salary = p.salary*(p.age/100)+p.salary;
});

console.log(obj.employee);