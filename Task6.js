//Task 1 — Student Result Analyzer
console.log("========================Task1=====================")
var name=prompt("Enter the Name");
var department=prompt("Enter the Department");
var sub1=prompt("Enter subject 1 mark");
var sub2=prompt("Enter subject 2 mark");
var sub3=prompt("Enter subject 3 mark");
var sub4=prompt("Enter subject 4 mark");
var sub5=prompt("Enter subject 5 mark");

var totalMark=Number(sub1)+Number(sub2)+Number(sub3)+Number(sub4)+Number(sub5);
var average=totalMark/5;
var grade;

if(average>=90){
    grade="A";
}else if(average<=89 && average>=75){
    grade="B";
}else if(average<=74 && average>=60){
    grade="C";
}else if(average<=59 && average>=50){
    grade="D";
}else if(average<50){
    grade="Fail";
}

console.log("Name : ",name);
console.log("Department : ",department);
console.log("Total Marks : ",totalMark);
console.log("Average : ",average);
console.log("Grade : ", grade);

//Task 2 — Employee Salary Calculator
console.log("========================Task2=====================")

var employees={
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2 
}

function calculateSalary(employee){

    var basic=employee.salary;

    if(employee.experience>=5){

        return basic+((basic*15)/100);
        
    }else if(employee.experience>=2){
        return basic+((basic*10)/100);
        
    }
}
console.log("Final Salary : ",calculateSalary(employees));

//Task 3 — Product Filter System
console.log("========================Task3=====================")

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let filterProduct=products.filter((product)=>{
    return product.price>2000;
})

console.log("products above ₹2,000",filterProduct);

let filterProduct1=products.filter((product)=>{
    return product.category==="electronics";
})
console.log("electronics products", filterProduct1);

let findProduct=products.find((product=>{
    return product.price<1000;
}))
console.log("product price less than 1000", findProduct);

let reduceProduct=products.reduce((acc,product)=>{
    return acc+product.price;
},0)
console.log("Total price of all products", reduceProduct);
let someProduct=products.some((product)=>{
    return product.price>50000;
})
console.log("some product price is greater than 50000", someProduct);
let everyProduct=products.every((product)=>{
    return product.price>500
});
console.log("every product price is greater than 500", everyProduct);


//Task 4 — Employee Management
console.log("========================Task4=====================")
let employees1 = [
    {id: 101,name: "Kavin",role: "Frontend Developer",salary: 40000},
    {id: 102,name: "Ramesh",role: "Backend Developer",salary: 50000},
    {id: 103,name: "Suresh",role: "Full Stack Developer",salary: 80000},
    {id: 104,name: "Ajith",role: "Frontend Developer",salary: 45000},
    {id: 105,name: "Arjun",role: "UI Designer",salary: 30000},
    {id: 106,name: "Manoj",role: "Backend Developer",salary: 60000}
    
];

employees1.forEach((employee)=>{
    console.log(employee.name);
})
let filterEmployee=employees1.filter((employee)=>{
    return employee.salary>40000
});
console.log("employees earning above ₹40,000 ",filterEmployee);

let findEmployee=employees1.find((employee)=>{
    return employee.id==103;
})
console.log("employee with id 103", findEmployee);
let reduceEmployee=employees1.reduce((acc, employee)=>{
    return acc+employee.salary;
},0)
console.log("Total salary", reduceEmployee);
let sortEmployee=
employees1.sort((a,b)=>{
    return b.salary-a.salary;
})
console.log(" highest-paid employee ",sortEmployee[0]);
console.log(" employees from highest salary to lowest ",sortEmployee);

let employeeNames=employees1.map((e)=>e.name)
console.log("only names of employees", employeeNames);

//Task 5 — Shopping Cart
console.log("========================Task5=====================")

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    cart.forEach(item => {
        item.total = item.price * item.quantity;
    });

    let totalCartValue = cart.reduce((total, item) => {
        return total + item.total;
    }, 0);

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalAmount = totalCartValue - discount;

    console.log("Item Totals:");

    cart.forEach(item => {
        console.log(`${item.name}: ₹${item.total}`);
    });

    console.log("Total Cart Value: ₹" + totalCartValue);
    console.log("Discount: ₹" + discount);
    console.log("Final Payable Amount: ₹" + finalAmount);
}

calculateCart(cart);

// Task 6 — Student Search System
console.log("========================Task6=====================")

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

let above80 = students.filter(student => student.mark > 80);
console.log("Students who scored above 80:", above80);

let priya = students.find(student => student.name === "Priya");
console.log("Student named Priya:", priya);

let totalMarks = students.reduce((total, student) => {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);

let anyoneFailed = students.some(student => student.mark < 40);

console.log("Anyone Failed:", anyoneFailed);

let everyoneAbove40 = students.every(student => student.mark > 40);

console.log("Everyone scored above 40:", everyoneAbove40);

let sortedStudents = students.sort((a, b) => b.mark - a.mark);

console.log("Students sorted by marks:", sortedStudents);


// Task 7 — Array Transformation Challenge
console.log("========================Task7=====================")

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubledNumbers = numbers.map(num => num * 2);
console.log("Numbers × 2:", doubledNumbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let greaterThan15 = numbers.filter(num => num > 15);
console.log("Numbers greater than 15:", greaterThan15);

let firstGreaterThan20 = numbers.find(num => num > 20);
console.log("First number greater than 20:", firstGreaterThan20);

let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total:", total);

let anyGreaterThan40 = numbers.some(num => num > 40);
console.log("Any number greater than 40:", anyGreaterThan40);

let allPositive = numbers.every(num => num > 0);
console.log("Every number is positive:", allPositive);

let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted from highest to lowest:", sortedNumbers);

//Task 8 — String Analyzer
console.log("========================Task8=====================")

let str=prompt("Enter a string");

console.log("Total characters ",str.length);
console.log("Uppercase sentence ", str.toUpperCase());
console.log("Lowercase sentence ", str.toLowerCase());
console.log("Whether it contains JavaScript ",str.includes("JavaScript"));
console.log("First character ", str.charAt(0));
console.log("Last character ", str.charAt(str.length-1));
let words = str.split(" ");
console.log("Number of Words:", words.length);
console.log("Replace JavaScript with Python ", str.replace("JavaScript","Python"));
console.log("Convert sentence into an array using split() ", str.split(" "));

//Final Mini Project — Employee Dashboard
console.log("========================Final Mini Project=====================")
let employees2 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

employees2.forEach((employee)=>{
    console.log(`ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ${employee.salary}, Experience: ${employee.experience} years`);
})

let EmployeeName="Arun";

let foundEmployeeByName=employees2.find((employee)=>{
    return employee.name===EmployeeName;
})

if(foundEmployeeByName){
    console.log(`Employee found: ID: ${foundEmployeeByName.id}, Name: ${foundEmployeeByName.name}, Department: ${foundEmployeeByName.department}, Salary: ${foundEmployeeByName.salary}, Experience: ${foundEmployeeByName.experience} years`);
}else{
    console.log("Employee not found");
}

let Department="IT";

let employeesInDepartment=employees2.filter((employee)=>{
    return employee.department===Department;
})

if(employeesInDepartment.length>0){
    console.log(`Employees in ${Department} department:`,employeesInDepartment);
}else{
    console.log(`No employees found in ${Department} department`);
}

let filterSalary=employees2.filter((employee)=>{
    return employee.salary>50000;
})
console.log("Employees with salary greater than 50000:", filterSalary);

let totalSalary=employees2.reduce((acc,employee)=>{
    return acc+employee.salary;
},0)
console.log("Total Salary of all employees:", totalSalary);

let highestpaid=employees2.sort((a,b)=>{
    return b.salary-a.salary
})

console.log("Highest paid employee:", highestpaid[0]);

let exeperiance=employees2.filter((e)=>{
    return e.experience>3

})
console.log("Employees with more than 3 years of experience:", exeperiance);

let salaryLowToHigh = employees2.sort(
    (a, b) => a.salary - b.salary
);

salaryLowToHigh.forEach(employee => {
    console.log(`${employee.name} - ₹${employee.salary}`);
});

let salaryHighToLow = employees2.sort(
    (a, b) => b.salary - a.salary
);

salaryHighToLow.forEach(employee => {
    console.log(`${employee.name} - ₹${employee.salary}`);
});


let totalEmployees = employees2.length;

let averageSalary = totalSalary / totalEmployees;


console.log("Total Employees:", totalEmployees);
console.log("Total Salary: " + totalSalary);
console.log("Highest Salary: " + highestpaid[0].salary);
console.log("Average Salary: " + Math.round(averageSalary));