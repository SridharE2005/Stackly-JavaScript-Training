
//Task 1 — var, let, const
console.log("-----------------------Task 1----------------------");
var studentName="Sridhar";
let studentAge=21;
const collegeName="Mahendra Engineering College";
console.log(studentName);
console.log(studentAge);
console.log(collegeName);
studentName="Ragu";
studentAge=19;
// collegeName="JKKM";   TypeError: Assignment to constant variable.
var studentName="Vishwa";
// let studentAge=20;    Identifier 'studentAge' has already been declared.

//Task 2 — User Information
console.log("-----------------------Task 2----------------------");
var Name=prompt("What is your Name?");
var Age =prompt("What is your age?");
var City=prompt("What is your city?");

console.log("Name : "+Name);
console.log("Age : "+Age);
console.log("City : "+City);

//Task 3 — Welcome Message
console.log("-----------------------Task 3----------------------");

var UserName=prompt("What is your Name?");
alert("Welcome "+UserName+"!");

//Task 4 — Age Calculator
console.log("-----------------------Task 4----------------------");

var currentYear=2026;
var birthYear=prompt("What is your birth year?");
console.log("Birth Year :"+birthYear);
console.log("Age : "+(currentYear-birthYear));

//Data Type Tasks
//Task 5 — Identify Data Types
console.log("-----------------------Task 5----------------------");

var str="Hello";
var num1=100;
var float=25.5;
var bool1=true;
var bool2=false;
var und;
var nul=null;
console.log(typeof(str));
console.log(typeof(num1));
console.log(typeof(float));
console.log(typeof(bool1));
console.log(typeof(bool2));
console.log(typeof(und));
console.log(typeof(nul));

//Task 6 — Student Data
console.log("-----------------------Task 6----------------------");


var student={
    name:"Sridhar",
    age:21,
    city:"Salem",
    qualification:["B.E","M.E"],
    isStudent:true
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

// Task 7 — Fruit Array
console.log("-----------------------Task 7----------------------");


var fruits=["Apple","Mango","Orange","Banana","Grapes","Papaya"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);

//Arithmetic Operator Tasks
//Task 8 — Basic Calculator
console.log("-----------------------Task 8----------------------");


let a = 20;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Task 9 — Shopping Bill
console.log("-----------------------Task 9----------------------");


let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;

var total=Shirt+Pant+Shoes;
console.log("Total = "+total);

//Task 10 — Simple Marks Calculation
console.log("-----------------------Task 10----------------------");


let Tamil = 80;
let English = 75;
let Maths = 90;

var total=Tamil+English+Maths;
var avg=total/3;

console.log("Total Marks = "+total);
console.log("Average Mark = "+avg);

//Increment & Decrement Tasks
//Task 11 — Post Increment
console.log("-----------------------Task 11----------------------");


let a1 = 10;

let b1 = a1++;

console.log(a1);
console.log(b1);
//Out put :
//11
//10

//Task 12 — Pre Increment
console.log("-----------------------Task 12----------------------");

let a2 = 20;

let b2 = a2--;

console.log(a2);
console.log(b2);
//Out put :
//19
//20

//Task 13 — Post Decrement
console.log("-----------------------Task 13----------------------");

let a5 = 20;

let b5 = a5--;

console.log(a5);
console.log(b5);

//19
//20

//Task 14 — Pre Decrement
console.log("-----------------------Task 14----------------------");

let a3 = 20;
let b3 = --a3;
console.log(a3);
console.log(b3);
//Out put :
//19
//19

//Challenge Tasks
//Task 15 — Find the Final Values
console.log("-----------------------Task 15----------------------");

let a4 = 5;

let b4 = a4++;

let c = ++a4;

let d = b4--;

console.log(a4);
console.log(b4);
console.log(c);
console.log(d);

//Output
//7
//4
//7
//5

//Task 16 — Assignment Operators
console.log("-----------------------Task 16----------------------");

let num = 10;

num+=5;
console.log(num);
num -=5;
console.log(num);
num *=5;
console.log(num);
num /=5;
console.log(num);
num %=5;
console.log(num);
num **=5;
console.log(num);

// Task 17 — Mini Student Profile
console.log("-----------------------Task 17----------------------");

var Name="Sridhar";
var Age=21;
var City="Salem";
var College="Mahendra Engineering College";

var subjects=["Tamil","English","Maths","WebTechnologies","Devops"];
var student ={
    name:"Sridhar",
    age:21,
    city:"Salem",
    subjects:["Tamil","English","Maths","WebTechnologies","Devops"],
    isStudent:true
}

console.log("Student Name : "+Name);
console.log("Student Age : "+student.age);
console.log("City : "+City);
console.log("First subject : "+subjects[0]);
console.log("Last subject : "+student.subjects[student.subjects.length-1]);
console.log("Total subjects : "+subjects.length);
console.log(student);


//Final Challenge — User + Calculator
console.log("-----------------------Final Task----------------------");


var num1=prompt("Enter First Number");
var num2=prompt("Enter Second Number");
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);

