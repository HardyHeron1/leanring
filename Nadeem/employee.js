const employee = {
    employee1: {
        Name: 'Nadeem',
        Age: 34,
        Designation: 'Always a learner',
        Gender: 'Male',
        EmailID: 'nadeem@gmail.com',
        Salary: 'No par',
    },
    employee2: {
        Name: 'Naouf',
        Age: 34,
        Designation: 'B.E. EXT',
        Gender: 'Male',
        EmailID: 'naouf@gmail.com',
        Salary: 1000000,
    },
    employee3: {
        Name: 'Arif',
        Age: 34,
        Designation: 'Sethji',
        Gender: 'Male',
        EmailID: 'arif@gmail.com',
        Salary: 'Jugadu',
    },
    employee4: {
        Name: 'Anas',
        Age: 29,
        Designation: 'Intelligence Engineer',
        Gender: 'Male',
        EmailID: 'anas@gmail.com',
        Salary: 500000,
    },
    employee5: {
        Name: 'Mustafa',
        Age: 25,
        Designation: 'E bhai',
        Gender: 'Male',
        EmailID: 'mustafa@gmail.com',
        Salary: 'Mere pass maa hai gadi hai bangla hai aur sabse important baap aur bhai hai',
    },
    employee6: {
        Name: 'Arshad',
        Age: 1947,
        Designation: 'Work what does that mean',
        Gender: 'Male',
        EmailID: 'arshadsusth@gmail.com',
        Salary: 'Chalenga',
    },
    employee7: {
        Name: 'Zia',
        Age: 36,
        Designation: 'Arshad is my sadu',
        Gender: 'Male',
        EmailID: 'zia@gmail.com',
        Salary: '100000000000000000000000000 still not sufficient',
    },
    employee8: {
        Name: 'Samir',
        Age: 30,
        Designation: 'C.E.O',
        Gender: 'Male',
        EmailID: 'samir@gmail.com',
        Salary: '1500000',
    },

}
console.log(employee.employee3);
console.log(Object.values(employee.employee7));
console.log(employee.employee7.Name.substr(0,1));