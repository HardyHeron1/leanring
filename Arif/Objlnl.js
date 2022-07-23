const obj = {
  name: 'look n like',
  address: 'Padegaon, Near Mental hospital, Nashik road',
  owner: "Abdullah Khan",
  employee: [
    { name: 'osama', age: 28, designation: 'ceo', salary: 50000 },
    { name: 'arif', age: 34, designation: 'coo', salary: 25000 },
    { name: 'sakib', age: 24, designation: 'staff', salary: 5000 },
    { name: 'sahil', age: 18, designation: 'staff', salary: 4000 },
    { name: 'zaid', age: 16, designation: 'staff', salary: 5000 },
    { name: 'ali', age: 8, designation: 'staff', salary: 500 },
  ],
  product: [
    { name: 'sofa', type: 'furniture', color: 'brown', price: 25000, brand: 'abd', stockQty: 3 },
    { name: 'sofa', type: 'furniture', color: 'blue', price: 20000, brand: 'abd', stockQty: 4 },
    { name: 'sofa', type: 'furniture', color: 'green', price: 24500, brand: 'abd', stockQty: 5 },
    { name: 'curtain', type: 'household', color: 'red', price: 250, brand: 'abd', stockQty: 10 },
    { name: 'curtain', type: 'household', color: 'blue', price: 350, brand: 'abd', stockQty: 10 },
    { name: 'curtain', type: 'household', color: 'green', price: 450, brand: 'abd', stockQty: 0 },
    { name: 'curtain', type: 'household', color: 'white', price: 300, brand: 'abd', stockQty: 10 },
    { name: 'table', type: 'furniture', color: 'brown', price: 2500, brand: 'abd', stockQty: 3 },
    { name: 'table', type: 'furniture', color: 'blue', price: 2000, brand: 'abd', stockQty: 0 },
    { name: 'table', type: 'furniture', color: 'green', price: 2450, brand: 'abd', stockQty: 5 },
    { name: 'mattress', type: 'home', color: 'brown', price: 12000, brand: 'abd', stockQty: 5 },
    { name: 'mattress', type: 'home', color: 'green', price: 12500, brand: 'abd', stockQty: 5 },
    { name: 'mattress', type: 'home', color: 'red', price: 13000, brand: 'abd', stockQty: 0 },
    { name: 'mattress', type: 'home', color: 'black', price: 14000, brand: 'abd', stockQty: 5 },
  ]
};
const road = obj.address.indexOf("Nashik");
console.log(road);
console.log(obj.address.substring(road, obj.address.length));
console.log(obj.name.replace("n", "and"));
const empa = obj.employee;
console.log(empa);
const aa = empa.filter((p) => {

  return p.name.startsWith("a") || p.name.endsWith("a");
});
const ss = empa.filter((p) => {

  return p.salary < 25000;
});
console.log(ss);

const furn = obj.product.filter((p) => {
  return p.type == "furniture";
});
console.log(furn);
obj.product.forEach((p) => {
  if (p.color == "blue") {
    console.log(p.price);
  };
});

