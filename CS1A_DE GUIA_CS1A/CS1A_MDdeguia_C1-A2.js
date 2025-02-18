// 1. Develop a program initializing 4 variables [a, b, c, d] and 1 constant [e], store the following values:
let a = 25;
let b = 20;
let c = 12;
let d = "15";  // string value
const e = 15;

// 2.
// a. Display the sum of the declared variables [a,b,c,d] and constant [e] combined.
let total_sum = a + b + c + d + e;  
console.log("the sum of all variable and the : " + total_sum);
// the output will be 571515 because the value of the d is a string not a number.

//b. Compare the values of variable d and constant e using relational operators [>, <, =>,<=, and ===], then display the results.
console.log("d > e: " + (d > e)); // the output is false
console.log("d < e: " + (d < e)); // the output is false
console.log("d >= e: " + (d >= e)); // the output is true
console.log("d <= e: " + (d <= e)); // the output is true
console.log("d === e: " + (d === e)); // the output is false

// c. Declare new variables to store the result/s of the following operations, then after, display the results:

//1. Subtract all the values of the declared variables.
let subtraction = a - b - c - d - e;
console.log("Subtraction result: " + subtraction);
// the output is: -37 because if u use a minus or subtraction in int number and string number. the string number will automatically converted to int thats why the output is -37.


//2. Multiply the values of variable a and c, divided by constant e.
let multiplication = (a * c) / e;
console.log("Multiplication result: " + multiplication);
// output: (25 * 12) / 15 = 300 / 15 = 20

//3. Display the exponent value of constant e raise to the power of variable c.
let exponent = e ** c;
console.log("Exponent result: " + exponent);
// output: 15^12 = 129746337890625

//4. Reassign the value of c.3 to constant e, then display the result.
//e = c ** 3
//console.log ("the result of the new value of e:" + e)
// this is eror because u cant reassign the value of const.
