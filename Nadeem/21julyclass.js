const obj = {
    name: 'look n like',
    address: 'Padegaon, Near Mental hospital, Nashik road',
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

// Print details of underage employees
const underage = obj.employee.filter((a) => {
    return a.age<=18;
})
console.log(underage);

// Replace owners last name
const replace = obj.owner.split(" ");
replace.splice(replace.length-1,1,'Thekedaar');
obj.owner=replace.join(" ");
console.log(obj.owner);

// print detail of the item with zero stock or empty

const emptystock = obj.product.filter((s) => {
    return s.stockQty == 0;

}
)

// address change

const change = obj.address.indexOf("Nashik");
console.log(change);
console.log(obj.address.substring(change, obj.address.length));

// replace name

const rename = obj.name.replace("n", "and");
console.log(rename);

// start and with a

const abs = obj.employee.filter((a) => {
    return a.name.toLowerCase().startsWith("a") || a.name.toLowerCase().endsWith("a");
    });
    console.log(abs);

// Salary

const salary = obj.employee.filter((a) => {
    return a.salary < 25000;
});
console.log(salary);

// product type

const type = obj.product.filter((a) => {
    return a.type == "furniture";
});
console.log(type);

// product price with blue color

const color = obj.product.filter((a) => {
    if (a.color == "blue"){
        console.log(a.price);
    }
});