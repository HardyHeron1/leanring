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
        Age: 35,
        Designation: 'B.E. EXT',
        Gender: 'Male',
        EmailID: 'naouf@gmail.com',
        Salary: 35000,
    },
    employee3: {
        Name: 'Arif',
        Age: 36,
        Designation: 'Sethji',
        Gender: 'Male',
        EmailID: 'arif@gmail.com',
        Salary: 45000,
    },
    employee4: {
        Name: 'Anas',
        Age: 29,
        Designation: 'Intelligence Engineer',
        Gender: 'Male',
        EmailID: 'anas@gmail.com',
        Salary: 50000,
    },
    employee5: {
        Name: 'Mustafa',
        Age: 25,
        Designation: 'E bhai',
        Gender: 'Male',
        EmailID: 'mustafa@gmail.com',
        Salary: 75000,
    },
    employee6: {
        Name: 'Arshad',
        Age: 36,
        Designation: 'Work what does that mean',
        Gender: 'Male',
        EmailID: 'arshadsusth@gmail.com',
        Salary: 150000,
    },
    employee7: {
        Name: 'Zia',
        Age: 37,
        Designation: 'Arshad is my sadu',
        Gender: 'Male',
        EmailID: 'zia@gmail.com',
        Salary: 125000,
    },
    employee8: {
        Name: 'Samir',
        Age: 30,
        Designation: 'C.E.O',
        Gender: 'Male',
        EmailID: 'samir@gmail.com',
        Salary: 150000,
    },

}
// console.log(employee.employee3);
// console.log(Object.values(employee.employee7));
// console.log(employee.employee7.Name.substr(0,1));

const department = {
    sale: {
        employeeIDs: ["employee6", "employee7"],
    },

    marketing: {
        employeeIDs: ["employee1", "employee2", "employee3"],
    },

    technical: {
        employeeIDs: ["employee4", "employee5", "employee8"],
    },
}

// Average age of marketing employee
let totalAge = 0;

department.marketing.employeeIDs.forEach((p) => {
    totalAge += employee[p].Age;
});

const avg = totalAge / department.marketing.employeeIDs.length;
console.log(avg);

//Total age of technical employee

let tAge = 0;

department.technical.employeeIDs.forEach((p) => {
    tAge += employee[p].Age;
});
console.log(tAge);


//Average salary of technical emplyoee

let totalSalary = 0;
department.technical.employeeIDs.forEach((p) => {
    totalSalary += employee[p].Salary;
});
const avgSalary = Math.round(totalSalary / department.technical.employeeIDs.length);
console.log(avgSalary);

// Sort sale employee based on age in decending order

department.sale.employeeIDs.sort((a, b) => {
    return employee[b].Age - employee[a].Age
});
console.log(department.sale.employeeIDs);



// Highest salary among marketing employee



let highestSalary = 0;
department.marketing.employeeIDs.forEach((p) => {
    if (highestSalary < employee[p].Salary) {
        highestSalary = employee[p].Salary;
    }
    
})
console.log(highestSalary);
