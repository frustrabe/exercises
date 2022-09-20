// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.
// BONUS: Make a program that can subtract, multiply, and also divide!

//__________________________________________________________________________________________

//Addition calculator
// 1. Prompts the user for first number.
// 2. Stores that first number
var first = prompt("Enter the first number to add!");
// 3. Prompts the user for the second number.
var second = prompt("Enter the second number to add!");
// 4. stores that number and
var sumAdd = Number(first) + Number(second);
// responds with the SUM by using an alert.
var result = alert("The result is : " + sumAdd);

//Subtraction calculator
var first = prompt("Enter the first number to add!");
var second = prompt("Enter the second number to add!");
var sumSubtract = Number(first) - Number(second);
var result = alert("The result is : " + sumSubtract);

//Multiplication calculator
var first = prompt("Enter the first number to add!");
var second = prompt("Enter the second number to add!");
var sumMultiply = Number(first) * Number(second);
var result = alert("The result is : " + sumMultiply);

//Division calculator
var first = prompt("Enter the first number to add!");
var second = prompt("Enter the second number to add!");
var sumMultiply = Number(first) / Number(second);
var result = alert("The result is : " + sumDivide);

//All in one calculator (only one set of numbers)
var first = prompt("Enter the first number to add!");
var second = prompt("Enter the second number to add!");
var sumAdd = Number(first) + Number(second);
var result = alert("The result is : " + sumAdd);
//------------------------------------------------
var first = prompt("Enter the first number to subtract!");
var second = prompt("Enter the second number to subtract!");
var sumSubtract = Number(first) - Number(second);
var result = alert("The result is : " + sumSubtract);
//------------------------------------------------
var first = prompt("Enter the first number to multiply!");
var second = prompt("Enter the second number to multiply!");
var sumMultiply = Number(first) * Number(second);
var result = alert("The result is : " + sumMultiply);
//------------------------------------------------
var first = prompt("Enter the first number to divide!");
var second = prompt("Enter the second number to divide!");
var sumDivide = Number(first) / Number(second);
var result = alert("The result is : " + sumDivide);
