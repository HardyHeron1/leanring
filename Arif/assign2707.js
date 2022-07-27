const employee = {
    employee1: {
        Name: 'Nadeem',
        Age: 34,
        Designation: 'Always a learner',
        Gender: 'Male',
        EmailID: 'nadeem@gmail.com',
        Salary: 1000,
    },
    employee2: {
        Name: 'Naouf',
        Age: 36,
        Designation: 'B.E. EXT',
        Gender: 'Male',
        EmailID: 'naouf@gmail.com',
        Salary: 2000,
    },
    employee3: {
        Name: 'Arif',
        Age: 32,
        Designation: 'Sethji',
        Gender: 'Male',
        EmailID: 'arif@gmail.com',
        Salary: 50000,
    },
    employee4: {
        Name: 'Anas',
        Age: 29,
        Designation: 'Intelligence Engineer',
        Gender: 'Male',
        EmailID: 'anas@gmail.com',
        Salary: 5000,
    },
    employee5: {
        Name: 'Mustafa',
        Age: 25,
        Designation: 'E bhai',
        Gender: 'Male',
        EmailID: 'mustafa@gmail.com',
        Salary: 4000,
    },
    employee6: {
        Name: 'Arshad',
        Age: 1947,
        Designation: 'Work what does that mean',
        Gender: 'Male',
        EmailID: 'arshadsusth@gmail.com',
        Salary: 2500,
    },
    employee7: {
        Name: 'Zia',
        Age: 36,
        Designation: 'Arshad is my sadu',
        Gender: 'Male',
        EmailID: 'zia@gmail.com',
        Salary: 1,
    },
    employee8: {
        Name: 'Samir',
        Age: 30,
        Designation: 'C.E.O',
        Gender: 'Male',
        EmailID: 'samir@gmail.com',
        Salary: 15000,
    },

};

const department = {
sale : {
    totalemployee : 2,
    employeeids : ["employee6","employee7"]
},
marketing : {
    totalemployee : 3,
    employeeids : ["employee1","employee2","employee3"]
},
tecnical : {
    totalemployee : 3,
    employeeids : ["employee4","employee5","employee8"]
},
};

// let total = 0;
// department.marketing.employeeids.forEach((p)=>{
//     total += employee[p].Age;
// });
// console.log(total);

// let total = 0;
// department.tecnical.employeeids.forEach((p)=>{
//     total+= employee[p].Age;
// });
// console.log(total);

// let total = 0;
// department.tecnical.employeeids.forEach((p)=>{
//     total+=employee[p].Salary;
//     avgsal = total/department.tecnical.totalemployee;
// });
// console.log(avgsal)

// department.sale.employeeids.sort((a,b)=>{return employee[b].Age-employee[a].Age});
// console.log(department.sale.employeeids);

// department.marketing.employeeids.sort((a,b)=>{return employee[b].Age-employee[a].Age});
// console.log(department.marketing.employeeids);

