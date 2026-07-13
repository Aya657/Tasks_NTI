//Task 1
var num1 = window.prompt("Enter the first number:");
var num2 = window.prompt("Enter the second number:");
var sum = parseInt(num1) + parseInt(num2);
var subtract = parseInt(num1) - parseInt(num2);
var multiply =Number(num1) * Number(num2);
var divide = Number(num1) / Number(num2);
var PoWer = num1 ** num2;
console.log("The sum ="  + sum);
console.log("The subtract ="  + subtract);
console.log("The multiply ="  + multiply);
console.log("The divide ="  + divide);
console.log("The power ="  + PoWer);

//task 2
var firstName = window.prompt("Enter your first name:");
var last_Name = window.prompt("Enter your last name:");
var fullName = firstName + " " + last_Name;
var age = window.prompt("Enter your age:");
console.log("Hello " + fullName + ", you are " + age + " years old.");