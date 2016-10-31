// Storing data of Object Employee
var Employee = {
    name:"Agnish",
    age:27,
    salary:1500000,
    Address:{city:"Bangalore",state:"Karnataka",pincode:560034} // Sub Object Address Initialized
};

// Logging data for Object Employee

console.log("Name : "+Employee.name);
console.log("Age : "+Employee.age);
console.log("Salary: "+Employee.salary);
console.log("City : "+Employee.Address.city);
console.log("State : "+Employee.Address.state);
console.log("PinCode : "+Employee.Address.pincode);

alert("Please check console for values");
