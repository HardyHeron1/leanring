const obj = {
    name: 'look n like',
    address: 'Padegaon, Near Mental hospital, Nashik road',
    owner: "Abdullah Khan",
    employee: [
      {name: 'osama', age: 28, designation: 'ceo', salary: 50000},
      {name: 'Arif', age: 34, designation: 'coo', salary: 25000},
      {name: 'sakib', age: 24, designation: 'staff', salary: 5000},
      {name: 'sahil', age: 18, designation: 'staff', salary: 4000},
      {name: 'zaid', age: 16, designation: 'staff', salary: 5000},
      {name: 'ali', age: 8, designation: 'staff', salary: 500},
    ],
    product: [
      {name: 'sofa', type: 'furniture', color: 'brown', price: 25000, brand: 'abd', stockQty: 3},
      {name: 'sofa', type: 'furniture', color: 'blue', price: 20000, brand: 'abd', stockQty: 4},
      {name: 'sofa', type: 'furniture', color: 'green', price: 24500, brand: 'abd', stockQty: 5},
      {name: 'curtain', type: 'household', color: 'red', price: 250, brand: 'abd', stockQty: 10},
      {name: 'curtain', type: 'household', color: 'blue', price: 350, brand: 'abd', stockQty: 10},
      {name: 'curtain', type: 'household', color: 'green', price: 450, brand: 'abd', stockQty: 0},
      {name: 'curtain', type: 'household', color: 'white', price: 300, brand: 'abd', stockQty: 10},
      {name: 'table', type: 'furniture', color: 'brown', price: 2500, brand: 'abd', stockQty: 3},
      {name: 'table', type: 'furniture', color: 'blue', price: 2000, brand: 'abd', stockQty: 0},
      {name: 'table', type: 'furniture', color: 'green', price: 2450, brand: 'abd', stockQty: 5},
      {name: 'mattress', type: 'home', color: 'brown', price: 12000, brand: 'abd', stockQty: 5},
      {name: 'mattress', type: 'home', color: 'green', price: 12500, brand: 'abd', stockQty: 5},
      {name: 'mattress', type: 'home', color: 'red', price: 13000, brand: 'abd', stockQty: 0},
      {name: 'mattress', type: 'home', color: 'black', price: 14000, brand: 'abd', stockQty: 5},
    ]
  };
  const underageemployee = obj.employee.filter((p)=>{
    return p.age<=18;
  }
  )
  const resurname = obj.owner.split(" "); 
  resurname.splice(resurname.length-1,1,'bhai');
  obj.owner=resurname.join(' ');
  
  const emptystock = obj.product.filter((c)=>{
    return c.stockQty==0;
  }
  )
  //console.log(obj.owner);
  //console.log(underageemployee);
  //console.log(resurname);
  //console.log(obj);
  //console.log(emptystock);
  
  // Question No 1
  const address = obj.address.split(" "); 
  address.splice(0,4,);
  obj.address= address.join(" ");
  console.log(obj.address);
  
  // Question No 2
  const newname = obj.name.split(" ");
  newname.splice(1,1,"And");
  obj.name = newname.join(" ");
  console.log(obj.name);
  
  //Question 3

let a = [];
    for(j=0;j<obj.employee.length;j++){
    a.push(obj.employee[j]);
    };
    
    const b = a.filter((p)=>{
        if(p.name.startsWith("A")==true){
            return true;
        }
    })

console.log(b);

 //Question 4

 const salary1 = a.filter((c)=>{
    return c.salary < 25000;
  }
  )
  console.log(salary1);

  //Question 5
  let f = [];
  for(k=0;k<obj.product.length;k++){
  f.push(obj.product[k]);
  };
  
  const e = f.filter((t)=>{
      return t.type == "furniture";
  })
  console.log(e);

  //Question 6

  const g = f.filter((u)=>{
    return u.color == "blue";
})
console.log(g);