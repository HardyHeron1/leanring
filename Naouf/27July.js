Employee ={
    Employee1:{
        Name: "Arif",
        Age: 34,
        Designation: "Civil Engineer",
        Gender: "Male",
        EmailId: "Arif123@gmail.com",
        Salary: 2500,
    },
    Employee2:{
        Name: "Naouf",
        Age: 34,
        Designation: "Engineer",
        Gender: "Male",
        EmailId: "Naouf123@gmail.com",
        Salary: 3000,
    },
    Employee3:{
        Name: "Nadeem",
        Age: 34,
        Designation: "Civil Engineer",
        Gender: "Male",
        EmailId: "Nadeem123@gmail.com",
        Salary: 25000,
    },
    Employee4:{
        Name: "Anas",
        Age: 30,
        Designation: "Mechanical Engineer",
        Gender: "Male",
        EmailId: "Anas123@gmail.com",
        Salary: 25000,
    },
    Employee5:{
        Name: "Ziaullah",
        Age: 38,
        Designation: "Extc Engineer",
        Gender: "Male",
        EmailId: "Ziaullah123@gmail.com",
        Salary: 2500,
    },
    Employee6:{
        Name: "Tanveer",
        Age: 31,
        Designation: "Software Engineer",
        Gender: "Male",
        EmailId: "Tanveer123@gmail.com",
        Salary: 50000,
    },
    Employee7:{
        Name: "Sameer",
        Age: 34,
        Designation: "Ceramic Engineer",
        Gender: "Male",
        EmailId: "Sameer123@gmail.com",
        Salary: 25000,
    },
    Employee8:{
        Name: "Azhar",
        Age: 34,
        Designation: "Sales executive",
        Gender: "Male",
        EmailId: "Azhar123@gmail.com",
        Salary: 5000,
    },
}
Department = {
    Sales : {
        NoofEmployees: 2,
        EmployeeID:["Employee4","Employee5"],
    },
    Marketing:{
    NoofEmployees: 3,
    EmployeeID:["Employee1","Employee2","Employee3"],
    },
    Technical:{
        NoofEmployees: 3,
        EmployeeID:["Employee6","Employee7","Employee8"],
        }
}
let Num = 0;
Department.Technical.EmployeeID.forEach((a) => {

    Num += Employee[a].Age
});
console.log(Num);

let sum = 0;
Department.Technical.EmployeeID.forEach((b) => {
    sum += Employee[b].Salary;
});
    let num = Math.round(sum/Department.Technical.EmployeeID.length);  

console.log(num);


Department.Sales.EmployeeID.sort((a,b)=>{return Employee[b].Age-Employee[a].Age});
console.log(Department.Sales.EmployeeID);

Department.Marketing.EmployeeID.sort((a,b)=>{return Employee[b].Salary-Employee[a].Salary});
let highestsalary=0
Department.Marketing.EmployeeID.forEach((p)=>{
    if(highestsalary < Employee[p].Salary){
         highestsalary= Employee[p].Salary
    }
})
   
console.log(highestsalary);
