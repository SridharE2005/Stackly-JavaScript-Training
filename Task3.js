
//JavaScript Tasks — Beginner Level
//Task 1 — Variables
console.log("-----------------------Task 1----------------------");
var Name="Sridhar";
let Age=21;
const City="Salem";
let College="Mahendra Engineering College";
console.log(Name);
console.log(Age);
console.log(City);
console.log(College);
Name="Ragu";
Age=20;
// City="Namakkal";  Uncaught TypeError: Assignment to constant variable.
var Name="Dhivi";
// let Age=23;      Identifier 'Age' has already been declared 
//const City="Chennai";  Identifier 'City' has already been declared.

//Task 2 — Printing Statements
console.log("-----------------------Task 2----------------------");
console.log("Log printing Statement")
alert("Alert printing Statement");
confirm("Confirm printing Statement");
prompt("Prompt printing Statement");
document.writeln("document.writeln printing Statement");

//Task 3 — User Details
console.log("-----------------------Task 3----------------------");
var name1=prompt("Enter your Name");
var age5=prompt("Enter your Age");
var city1=prompt("Enter your City");
var Qualification=prompt("Enter your Qualification");
console.log(name1);
console.log(age5);
console.log(city1);
console.log(Qualification);

//Data Type Tasks
//Task 4 — Find Data Types
console.log("-----------------------Task 4----------------------");
var ex1="JavaScript";
var ex2=100;
var ex3=99.5;
var ex4=true;
var ex5=false;
var ex6=undefined;
var ex7=null;
console.log(ex1+"-"+typeof(ex1));
console.log(ex2+"-"+typeof(ex2));
console.log(ex3+"-"+typeof(ex3));
console.log(ex4+"-"+typeof(ex4));
console.log(ex5+"-"+typeof(ex5));
console.log(ex6+"-"+typeof(ex6));
console.log(ex7+"-"+typeof(ex7));

//Task 5 — Student Array
console.log("-----------------------Task 5----------------------");
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log("First student : "+students[0]);
console.log("Second student : "+students[1]);
console.log("Last student : "+students[students.length-1]);
console.log("Total students : "+students.length);

//Task 6 — Employee Object
console.log("-----------------------Task 6----------------------");

let employee = {
    name: "Sridhar",
    age: 21,
    role: "MERN Stack Developer",
    skills: ["JavaScript", "React", "Node.js"],
    isWorking: true,
    qualification: ["B.E", "M.E"]
};

console.log("Employee Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First Skill:", employee.skills[0]);
console.log("Last Qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working Status:", employee.isWorking);

//Arithmetic Operator Tasks
//Task 7 — Calculator
console.log("-----------------------Task 7----------------------");
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

//Task 8 — Shopping Bill
console.log("-----------------------Task 8----------------------");
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;

let total = Shirt + Pant + Shoes + Bag;

console.log("Total Price:", total);

//Task 9 — Increment & Decrement
console.log("-----------------------Task 9----------------------");
//A
let a1 = 10;

let b1 = a1++;

console.log(a1);
console.log(b1);

//Output
//11
//10

//B
let a2 = 10;

let b2 = ++a2;

console.log(a2);
console.log(b2);
//Output
//11
//11

//C
let a3 = 10;

let b3 = a3--;

console.log(a3);
console.log(b3);
//Output
//9
//10

//D
let a4 = 10;

let b4 = --a4;

console.log(a4);
console.log(b4);
//Output
//9
//9

//Assignment Operator Tasks
//Task 10
console.log("-----------------------Task 10----------------------");
let num = 10;
num += 5;
console.log(num);
num -= 3;
console.log(num);
num *= 2;
console.log(num);
num /= 4;
console.log(num);
num %= 3;
console.log(num);
num **= 2;
console.log(num);

//Comparison Operator Tasks
//Task 11 — Find Output
console.log("-----------------------Task 11----------------------");
console.log(10 > 5); // Output:true
console.log(10 < 5); // Output:false
console.log(10 >= 10); // Output:true
console.log(10 <= 9); // Output:false
console.log(5 == "5"); // Output:true
console.log(5 === "5"); // Output:false
console.log(10 != "10"); // Output:false
console.log(10 !== "10"); // Output:true

//Logical Operator Tasks
//Task 12 — AND
console.log("-----------------------Task 12----------------------");
console.log(true && true); //Output:true
console.log(true && false); //Output:false
console.log(false && true); //Output:false
console.log(false && false); //Output:false

//Task 13 — OR
console.log("-----------------------Task 13----------------------");
console.log(true || true); //Output:true
console.log(true || false); //Output:true
console.log(false || true); //Output:true
console.log(false || false); //Output:false
//Task 14 — NOT
console.log("-----------------------Task 14----------------------");
console.log(!true); //Output:false
console.log(!false); //Output:true
console.log(!(5 > 10)); //Output:true
console.log(!(10 > 5)); //Output:false
// Task 15 — Combination
console.log("-----------------------Task 15----------------------");
console.log(5 == "5" && !(5 === 5) || 6 > 7);
//true && false || false
//false || false = false
console.log(10 > 5 && 8 < 12 || 4 === "4");
//true && true || false
//true || false = true
console.log(7 === 7 && 10 != "10" || 5 >= 5);
//true && true || true
//true || true = true
console.log(15 < 10 || 20 > 15 && 5 == "5");
// false || true && true
//false || true = true

//Ternary Operator Tasks
//Task 16 — Voting
console.log("-----------------------Task 16----------------------");
let age1 = 20;
console.log(age1>=18?"Eligible to vote":"Not eligible");
//output
//Eligible to vote

//Task 17 — Password
console.log("-----------------------Task 17----------------------");
let password = true;
console.log(password==true?"Login successful":"Wrong password");
//output
//Login successful

// Concatenation & Template String
//Task 18 — User Introduction
console.log("-----------------------Task 18----------------------");
let name = "Naveen";
let age = 25;
let city = "Trichy";
console.log("My name is "+name+". I am "+age+" years old. I live in "+city);
console.log(`My name is ${name}. I am ${age} years old. I live in ${city}`);

//Type Casting Tasks
//Task 19 — String Conversion
console.log("-----------------------Task 19----------------------");
console.log(typeof(String(100)));
console.log(typeof(String(true)));
console.log(typeof(String(undefined)));
console.log(typeof(String(null)));
console.log(typeof(String([1,2])));

//Task 20 — Number Conversion
console.log("-----------------------Task 20----------------------");
console.log(Number()); //Output:0
console.log(Number("")); //Output:0
console.log(Number("123")); //Output:123
console.log(Number("a1")); //Output:NaN
console.log(Number(true)); //Output:1
console.log(Number(false)); //Output:0
console.log(Number(undefined)); //Output:NaN
console.log(Number(null)); //Output:0

//Task 21 — Boolean Conversion
console.log("-----------------------Task 21----------------------");
console.log(Boolean()); //Output:false
console.log(Boolean("")); //Output:false
console.log(Boolean("hello")); //Output:true
console.log(Boolean(123)); //Output:true
console.log(Boolean(true)); //Output:true
console.log(Boolean(false)); //Output:false
console.log(Boolean(undefined)); //Output:false
console.log(Boolean(null)); //Output:false
console.log(Boolean([])); //Output:true
console.log(Boolean({})); //Output:true

//Flow Control Tasks
//Task 22 — Voting Eligibility
console.log("-----------------------Task 22----------------------");
var age2=prompt("Enter the Age");
if(age2>=18){
    console.log("you can vote");
}
else{
    console.log("you can't vote");
}

//Task 23 — Positive or Negative
console.log("-----------------------Task 23----------------------");
var numb=prompt("Enter the Number");
if(numb>0){
    console.log("Positive Number");
}else if(numb<0){
    console.log("Negative Number");
}
else{
    console.log("Zero");
}

//Task 24 — Grade System
console.log("-----------------------Task 24----------------------");
var mark=prompt("Enter your Mark");
if(mark>=90 && mark<=100){
    console.log("A Grade");
    }else if(mark>=80 && mark<89){
        console.log("B Grade");
    }else if(mark>=70 && mark<79){
        console.log("Grade C");
    }else if(mark>=60 && mark<69){
        console.log("Grade D");
    }else {
        console.log("Fail");
    }

//Nested If Task
//Task 25 — Job Eligibility 
console.log("-----------------------Task 25----------------------");
var Age1=prompt("Enter your Age");
var Height=prompt("Enter your Height in cm");
var Weight=prompt("Enter your Weight in kg");
if(Age1>=18){
    if(Height>=160){
        if(Weight>=60){
            console.log("Congratulations! You are selected");
        }
        else{
            console.log("Your weight is low");
        }
    }
    else{
        console.log("Your height is low");
    }
}

//Switch Tasks
//Task 26 — Traffic Light
console.log("-----------------------Task 26----------------------");
var colour="red";

switch(colour){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Colour");
}

//Task 27 — Day
console.log("-----------------------Task 27----------------------");
let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
        
    default:
        console.log("Invalid Day");
}

//FINAL MINI PROJECT
//Task 28 — Student Result System
console.log("-----------------------Task 28----------------------");

let Name1=prompt("Enter your Name");
let Age2=prompt("Enter your Age");
let City1=prompt("Enter your City");

let Tamil=prompt("Enter your Tamil Mark");
let English=prompt("Enter your English Mark");
let Maths=prompt("Enter your Maths Mark");

let TotalMark=Number(Tamil)+Number(English)+Number(Maths);


let Average=TotalMark/3;


let grade;
if(Average>=90){
    grade="A";
}
else if(Average>=80){
    grade="B";
}
else if(Average>=70){
    grade="C";
}
else if(Average>=60){
    grade="D";
    
}
else{
    grade="Fail";
}

var voting;

if(Age2>=18){
    voting=true;
}else{
    voting=false;
}

console.log(`Name: ${Name1}`);
console.log(`Age: ${Age2}`);
console.log(`City: ${City1}`);
console.log(`Total: ${TotalMark}`);
console.log(`Average: ${Average}`);
console.log(`Grade: ${grade}`);
console.log(`Voting : ${voting?"Eligible":"Not Eligible"}`);




