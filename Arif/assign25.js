const arr = [3,5,7,10,9,8,2];

const large= ()=>{
    let largest = 0;
    for(i=1;i<arr.length;i++){
            if (arr[largest]<arr[i]){
                largest = i;
            }
        }
        console.log(largest);
    };

large();
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
  const high= ()=>{
    let highprice = 0;
    for(i=1;i<obj.product.length;i++){
            if (obj.product[highprice].price<obj.product[i].price){
                highprice = i;
            }
        }
        console.log(obj.product[highprice]);
    };
    high();
const highest= ()=>{
    let highsal = 0;
        for(i=1;i<obj.employee.length;i++){
                if (obj.employee[highsal].salary<obj.employee[i].salary){
                    highsal = i;
                }
            }
            console.log(obj.employee[highsal]);
        };
        highest();