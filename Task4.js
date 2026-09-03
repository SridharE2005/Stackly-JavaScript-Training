//IIFE
//Task 29 — Self Invoking Function
(function(product,discount){
    console.log(`New Sale on ${product} with the discount of ${discount}%`);
    
})("Mobile",20)
console.log("-----------------------Task 29----------------------");
(function() {
    console.log("This is a self-invoking function");
})()


//JavaScript Practice Tasks
//Task 1 — For Loop
console.log("-----------------------Task 1----------------------");
for(let num1=1;num1<=10;num1++){
    console.log(num1);
}

// Task 2 — Reverse Number
console.log("-----------------------Task 2----------------------");
for(let num1=10;num1>=1;num1--){
    console.log(num1);
}

//Task 3 — Even Numbers
console.log("-----------------------Task 3----------------------");
for(let num1=1;num1<=20;num1++){
    if(num1%2==0){
        console.log(num1);
    }
}

// Task 4 — Odd Numbers
console.log("-----------------------Task 4----------------------");
for(let num1=1;num1<=20;num1++){
    if(num1%2!=0){
        console.log(num1);
    }
}

//Task 5 — Multiplication Table
// console.log("-----------------------Task 5----------------------");
// var num1=prompt("Enter the number to find multiplication table")
// for(let num2=1;num2<=10;num2++){

//     console.log(num1+"x"+num2+"="+num1*num2);

// }

//While Loop
//Task 6 — Countdown
console.log("-----------------------Task 6----------------------");
var num=10;
while(num>=1){
    console.log(num);
    num--;
    
}

//Task 7 — Sum of Numbers
console.log("-----------------------Task 7----------------------");
var num=1;
var num2=0;
while(num<=10){
    num2+=num;
    
    num++;
}
console.log(num2);

//Do While
//Task 8 — Print Numbers
console.log("-----------------------Task 8----------------------");
var num=1;
do{
    console.log(num);
    num++;
}while(num<=5)

//Task 9 — Do While Understanding
console.log("-----------------------Task 9----------------------");
let a = 10;
do {
    console.log(a);
    a++;
} while (a <= 5);

//Output:10
//because first the do block execute atleast once whether the condition is true or false.after executing that block only the while loop works.

//Task 10 — String Characters
console.log("-----------------------Task 10----------------------");
let name = "javascript";
for(var ch of name){
    console.log(ch);
}

//Task 11 — Array Values
console.log("-----------------------Task 11----------------------");
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(var fruit of fruits){
     console.log(fruit);
}
   
//Task 12 — Student Names
console.log("-----------------------Task 12----------------------");
let studentNames = ["Sridhar","Ragu","Dhivi","Magila","Kavi"];
for(var studentName of studentNames)
    {
        console.log("Student : ",studentName);
    } 

//Task 13 — Employee Object
console.log("-----------------------Task 13----------------------");
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for(var key in employee){
    console.log(key+" "+employee[key]);
    
}

//Task 14 — Product Object
console.log("-----------------------Task 14----------------------");
let product={
    productName:"Mobile",
    price:15000,
    brand:"Samsumg",
    category:"Electronics",
    stock:15
}

for(var key in product){
    console.log(key+" "+product[key]);
    
}

// Functions
//Task 15 — Simple Function
console.log("-----------------------Task 15----------------------");
function welcome(){
    console.log("Welcome to JavaScript");
    
}
welcome();
welcome();
welcome();

//Task 16 — Function With Parameter
console.log("-----------------------Task 16----------------------");
function greet(name) {
    console.log("Hello "+name);
    
}
greet("Naveen");
greet("Arun");
greet("Priya");

//Task 17 — Multiple Parameters
console.log("-----------------------Task 17----------------------");
function student(name,age,department){
    console.log("Student Name: "+name);
    console.log("Age: "+age);
    console.log("Department: "+department);
}
student("Sridhar",20,"CSE");
student("Magila", 19, "IT");
student("Kavi", 20, "ECE");

//Return
//Task 18 — Addition Function
console.log("-----------------------Task 18----------------------");

function add(a, b) {
    return a+b;
}

let result = add(10, 20);
console.log("Addition Value "+result); //30

//Task 19 — Salary
console.log("-----------------------Task 19----------------------");
function salary(amount) {
    return amount;
}

var amount=salary(50000);
console.log(amount); //50000

//Task 20 — Bonus Calculator
console.log("-----------------------Task 20----------------------");
function bonus(salary, bonusAmount){
    
    console.log("Salary = "+salary);
    console.log("Bonus = "+bonusAmount);
    return salary+bonusAmount;
}
console.log("Total = "+bonus(15000, 5000));

//Default Parameter
//Task 21
console.log("-----------------------Task 21----------------------");

function employee1(name, role = "Developer") {
    console.log(name);
    console.log(role);
    
}
employee1("Arun");
employee1("Priya", "Designer");

// Function Types
//Task 22 — Named Function
console.log("-----------------------Task 22----------------------");
function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(3));
console.log(square(6));
console.log(square(7));
console.log(square(8));

//Task 23 — Anonymous Function
console.log("-----------------------Task 23----------------------");
let calculate = function(a, b) {
    return a + b;
};
console.log(calculate(10, 20));

//Task 24 — Arrow Function
console.log("-----------------------Task 24----------------------");
let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 6));

//Scope
//Task 25 — Predict the Output
console.log("-----------------------Task 25----------------------");

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    //console.log(b);
    //console.log(c);
}

test();
//only the a variable value only accessed because of the global scope
//error:ReferenceError: b is not defined at test
//error:ReferenceError: c is not defined at test

// Hoisting
//Task 26 — Predict
console.log("-----------------------Task 26----------------------");
console.log(a1);
var a1 = 10;
//It prints undefined because var a is hoisted, but its value 10 is assigned later.

//Task 27
console.log("-----------------------Task 27----------------------");
// console.log(b);

let b = 20;
//error:ReferenceError: Cannot access 'b' before initialization
//It throws a ReferenceError because let b is in the Temporal Dead Zone (TDZ) until it is initialized.

//Task 28
console.log("-----------------------Task 28----------------------");
// const also throws a ReferenceError because c is in the Temporal Dead Zone (TDZ) until it is initialized.

//var → undefined because it is hoisted and initialized with undefined.
//let → ReferenceError because it is hoisted but not initialized yet (TDZ).
//const → ReferenceError because it is hoisted but not initialized yet (TDZ).

// Callback / Higher-Order Function
//Task 30
console.log("-----------------------Task 30----------------------");
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

//wlecome()is the callback function and then the execute() is the higher order function.first the callback function will execute then the higher order function will execute.

//Generator Function
//Task 31 — Cashback

function* cashback() {
 yield "10% cashback";
 yield "20% cashback";
 yield "30% cashback";
 yield "Better luck next time";
}

for(var dis of cashback()){
    console.log(dis);
}

//FINAL MINI PROJECT
//Task 32 — Employee Management Console
console.log("-----------------------Task 32----------------------");
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];


// 1. for...of 
for (let employee of employees) {
    console.log(employee);
}


// 2. for...in 
for (let employee of employees) {
    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }
}


// 3 & 4. Function with parameters
function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


// Calling the function
displayEmployee("Arun", 25, "IT", "Developer", 40000);


// 5. Function with return
function getSalary(employee) {
    return employee.salary;
}

console.log("Arun Salary:", getSalary(employees[0]));


// 6. Condition 
for (let employee of employees) {
    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    }
}


// 7. Arrow function 
let annualSalary = (salary) => salary * 12;

console.log("Annual Salary:", annualSalary(40000));


// 8. Generator 
function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

for(var ch of employeeBenefits()){
    console.log(ch);
}
