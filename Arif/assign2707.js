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
        Age: 34,
        Designation: 'B.E. EXT',
        Gender: 'Male',
        EmailID: 'naouf@gmail.com',
        Salary: 2000,
    },
    employee3: {
        Name: 'Arif',
        Age: 34,
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
        Salary: 1500,
    },

}

const department = {
sale : {
    totalemployee : 2,
    employeeids : ["employee6","employee7"]
},
marketing : {
    totalemployee : 3,
    employeeids : ["employee1","employee2","employee3"]
},
Tecnical : {
    totalemployee : 3
    employeeids : ["employee4","employee5","employee8"]
},
};

const eage = department.marketing.employeeids.forEach((p){
    total+= employee[p].Age;
})
console.log(eage);
department();