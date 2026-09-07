/* 
Variables & Data Types (Questions 1-8) 
 
Q1: What is the difference between var, let, and const? 
var, let, and const are all used to declare variables in JavaScript, but they behave differently.  
var is function-scoped and it allows us to redeclare and reassign a variable.  
let is block-scoped, so we can access the variable only within the block where it is declared. A let variable can be reassigned, but it cannot be redeclared within the same scope.  
Finally, const is also block-scoped, so we can access the variable only within its block. A const variable cannot be redeclared or reassigned after it has been initialized. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q2: Can you re-declare a variable with var? What about let and const? 
Yes, a variable declared using var can be redeclared in the same scope. However, let and const cannot be redeclared in the same scope. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q3: What is the output of this code? 
 
var x = 5; 
let y = 10; 
const z = 15; 
 
x = 20; 
y = 25; 
z = 30; 
 
console.log(x, y, z); 
 
Output: 
TypeError: Assignment to constant variable. 
 
Because the const variable does not allow reassignment. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q4: What is the difference between declaring and initializing a variable? 
Declaring a variable means creating the variable without necessarily giving it a value. Initializing a variable means assigning its first value when the variable is created. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q5: What will be the output? 
 
let a; 
console.log(a); 
 
Output: 
undefined 
 
Because the variable 'a' is declared but not initialized, so it will return undefined. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q6: What is hoisting? Give an example. 
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code is executed. 
 
Example: 
 
console.log(x); 
var x = 10; 
 
Output: 
undefined 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q7: What is the difference between null and undefined? 
null is a value that can be assigned to a variable to indicate that it is empty or no value. 
undefined means that a variable has been declared but has not yet been assigned a value. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q8: What will be the output? 
 
console.log(typeof null); 
console.log(typeof undefined); 
console.log(typeof []); 
console.log(typeof {}); 
 
Output: 
object 
undefined 
object 
object 
 
=============================================================================================================================== 
 
Operators (Questions 9-14) 
 
Q9: What is the difference between == and ===? 
 
"==" is used to compare two values based on their values only. 
"===" is used to compare two values based on their values and data types. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q10: What is the difference between ++i and i++? 
 
"++i" is called the pre-increment operation. It first updates the "i" value by one and then uses the updated value. 
"i++" is called the post-increment operation. It first uses the current value of "i" and then updates the value by one. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q11: What will be the output? 
 
let x = 10; 
let y = "5"; 
 
console.log(x + y); 
console.log(x - y); 
console.log(x * y); 
console.log(x / y); 
 
Output: 
105 
5 
50 
2 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q12: What are logical operators? Explain with examples. 
Logical operators are used to combine or reverse conditions in JavaScript.  
The three main logical operators are: 
&& (AND), || (OR), and ! (NOT). 
 
The && operator returns true when both conditions are true. 
The || operator returns true when at least one condition is true. 
The ! operator reverses the result, so true becomes false and false becomes true. 
 
Example: 
 
console.log(10 > 5 && 20 > 10); // Output: true 
console.log(10 > 5 || 5 > 20);  // Output: true 
console.log(!(10 > 5));         // Output: false 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q13: What will be the output? 
 
console.log(5 > 3 && 10 > 5); // Output: true 
console.log(5 > 10 || 10 > 5); // Output: true 
console.log(!(5 > 3)); // Output: false 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q14: What is the ternary operator? Give an example. 
 
The ternary operator is a short way of writing a simple if-else condition. It uses three parts: a condition, the value to return when the condition is true, and the value to return when the condition is false. 
 
Example: 
 
let age = 20; 
let status = age >= 18 ? "Adult" : "Minor"; 
console.log(status); 
 
Output: 
Adult 
 
=============================================================================================================================== 
 
Type Casting (Questions 15-17) 
 
Q15: What is the difference between implicit and explicit type casting? 
 
Type casting means converting a value from one data type to another. 
Implicit type casting happens automatically by JavaScript when it needs to convert a value during an operation. 
Explicit type casting happens when we manually convert the value using functions such as Number(), String(), or Boolean(). 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q16: What will be the output? 
 
console.log(Number("123")); 
console.log(Number("hello")); 
console.log(Number(true)); 
console.log(Number(false)); 
console.log(Boolean(0)); 
console.log(Boolean("hello")); 
 
Output: 
123 
NaN 
1 
0 
false 
true 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q17: What is NaN? Give an example? 
 
NaN stands for Not-a-Number. It is a special value in JavaScript that represents an invalid or unsuccessful numeric operation. For example, if we try to convert a text value that does not contain a valid number into a number, JavaScript returns NaN. 
 
Example: 
 
console.log(Number("hello")); 
 
Output: 
NaN 
 
=============================================================================================================================== 
 
Conditional Statements (Questions 18-21) 
 
Q18: What is the difference between if-else and switch? 
 
if-else statements are used to execute different blocks of code based on different conditions. 
switch statements are used to execute different blocks of code based on different values of a single variable. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q19: What will be the output? 
 
let age = 20; 
 
if(age >= 18) { 
    console.log("Adult"); 
} else { 
    console.log("Minor"); 
} 
 
Output: 
Adult 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q20: What is nested if? Give an example. 
 
A nested if statement is the process of placing one if statement inside another if statement. 
 
Example: 
 
let num = 10; 
 
if(num > 0) { 
    if(num % 2 == 0) { 
        console.log("Positive and Even"); 
    } else { 
        console.log("Positive and Odd"); 
    } 
} else { 
    console.log("Negative"); 
} 
 
Output: 
Positive and Even 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q21: Write a program to check if a number is even or odd using ternary operator. 
 
let number = 7; 
let result = number % 2 == 0 ? "Even" : "Odd"; 
console.log(result); 
 
Output: 
Odd 
 
=============================================================================================================================== 
 
Loops (Questions 22-25) 
 
Q22: What is the difference between while and do-while? 
 
while loop first checks the condition and then executes the block of code. 
do-while loop first executes the block of code and then checks the condition. The minimum iteration count is 1. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q23: What will be the output? 
 
for(let i = 1; i <= 5; i++) { 
    console.log(i); 
} 
 
Output: 
1 
2 
3 
4 
5 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q24: What is the difference between for-of and for-in? 
 
for-in loop is used to iterate over the properties of an object. 
for-of loop is used to iterate over the values of an iterable object like arrays, strings, etc. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q25: Write a program to find sum of numbers from 1 to 100. 
 
let sum = 0; 
 
for(let i = 1; i <= 100; i++) { 
    sum += i; 
} 
 
console.log(sum); 
 
Output: 
5050 
 
=============================================================================================================================== 
 
Arrays (Questions 26-27) 
 
Q26: What is the difference between slice and splice? 
 
slice() method is used to extract a part of an array and returns the new array. 
splice() method is used to add or remove elements from an array. It is an array manipulation method. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q27: What will be the output? 
 
let arr = [1, 2, 3]; 
 
arr.push(4); 
arr.pop(); 
arr.unshift(0); 
arr.shift(); 
 
console.log(arr); 
 
Output: 
[1, 2, 3] 
 
=============================================================================================================================== 
 
Functions (Questions 28-30) 
 
Q28: What is the difference between function declaration and function expression? 
 
Function declaration is a named function that is hoisted, meaning it can be called before it is defined in the code. 
Function expression is an anonymous function assigned to a variable, and it is not hoisted. 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q29: What is an arrow function? Give an example. 
 
Arrow functions are a shorter syntax for writing function expressions. It is mainly used for code optimization. 
 
Example: 
 
const greet = () => { 
    return "Hello World"; 
}; 
 
console.log(greet()); 
 
Output: 
Hello World 
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
Q30: What will be the output? 
 
function greet() { 
    return "Hello"; 
} 
 
let message = greet(); 
console.log(message); 
 
Output: 
Hello 
 
*/