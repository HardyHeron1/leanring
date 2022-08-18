const obj = {
    name: 'look n like',
    address: 'Padegaon Near Mental hospital Nashik road',
    owner: "Abdullah Khan",
    employee: [
        { name: 'osama', age: 28, designation: 'ceo', salary: 50000 },
        { name: 'Arif', age: 34, designation: 'coo', salary: 25000 },
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
const add = obj.address.split(" ");
add.splice(1, 1, "NAOUF", "aRIF");
obj.address = add.join(" ");
console.log(add);
console.log(obj.address);

const change = obj.name.split(" ");
change.splice(1, 1, 'and');
obj.name = change.join(" ")
console.log(obj.name);

let a = [];
for (i = 0; i < obj.employee.length; i++) {
    a.push(obj.employee[i]);
}

console.log(a);
const start = obj.employee.filter((p) => {
    return p.name.toLowerCase().startsWith('a') || p.name.toLowerCase().endsWith('a');
}
)
console.log(start);

const name1 = obj.employee.filter((p) => {
    return p.name.toLowerCase().startsWith('a') || p.name.toUpperCase().startsWith('a') || p.name.toLowerCase().endsWith('a');

})
console.log(name1);

const lesssalary = obj.employee.filter((p) => {
    return p.salary <= 25000;
})
console.log(lesssalary);

const type = obj.product.filter((p) => {
    return p.type == "furniture";
})
console.log(type);

const colorprice = obj.product.filter((p) => {
    return p.color == "blue";
})
console.log(colorprice);
