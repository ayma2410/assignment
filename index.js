//  var city = prompt("Enter your city name")/;

// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }

// // Question 2

// var gender = prompt("Enter your gender");

// if (gender === "male") {
//     alert("Good Morning Sir");
// }

// if (gender === "female") {
//     alert("Good Morning Ma'am");
// }

// // Question 3

// var color = prompt("Enter traffic signal color");

// if (color === "red") {
//     alert("Must Stop");
// }

// if (color === "yellow") {
//     alert("Ready to move");
// }

// if (color === "green") {
//     alert("Move now");
// }

// var fuel = parseFloat(prompt("Enter remaining fuel"));

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// var fuel = parseFloat(prompt("Enter remaining fuel"));

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// // b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// // c
// var c = 12;

// if (c++ === 13) {
//     alert("condition 1 is true");
// }

// if (c === 13) {
//     alert("condition 2 is true");
// }

// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// // e
// if (true) {
//     alert("True");
// }

// if (false) {
//     alert("False");
// }

// // f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// var sub1 = +prompt("Enter marks of Subject 1");
// var sub2 = +prompt("Enter marks of Subject 2");
// var sub3 = +prompt("Enter marks of Subject 3");
// var total = +prompt("Enter total marks");

// var obtained = sub1 + sub2 + sub3;
// var percentage = (obtained / total) * 100;

// document.write("Total Marks: " + total + "<br>");
// document.write("Marks Obtained: " + obtained + "<br>");
// document.write("Percentage: " + percentage + "%<br>");

// var secret = 7;
// var guess = +prompt("Guess the number");

// if (guess === secret) {
//     alert("Bingo! Correct answer");
// }
// else if (guess + 1 === secret) {
//     alert("Close enough to the correct answer");
// }

// var num = +prompt("Enter a number");

// if (num % 3 === 0) {
//     alert("Number is divisible by 3");
// }


// var number = +prompt("Enter a number");

// if (number % 2 === 0) {
//     alert("Even Number");
// }
// else {
//     alert("Odd Number");
// }

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter operator (+, -, *, /, %)");

// if (operator === "+") {
//     alert(num1 + num2);
// }
// else if (operator === "-") {
//     alert(num1 - num2);
// }
// else if (operator === "*") {
//     alert(num1 * num2);
// }
// else if (operator === "/") {
//     alert(num1 / num2);
// }
// else if (operator === "%") {
//     alert(num1 % num2);
// }

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter operator (+, -, *, /, %)");

// if (operator === "+") {
//     alert(num1 + num2);
// }
// else if (operator === "-") {
//     alert(num1 - num2);
// }
// else if (operator === "*") {
//     alert(num1 * num2);
// }
// else if (operator === "/") {
//     alert(num1 / num2);
// }
// else if (operator === "%") {
//     alert(num1 % num2);
// }

// ==========================
// Question 1
// ==========================

// var input = prompt("Enter a single character:");
// var ascii = input.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     document.write("The input is a Number.");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     document.write("The input is an Uppercase Letter.");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     document.write("The input is a Lowercase Letter.");
// }
// else {
//     document.write("Invalid Input.");
// }// ==========================
// // Question 2
// // ==========================

// var num1 = +prompt("Enter first integer:");
// var num2 = +prompt("Enter second integer:");

// if (num1 > num2) {
//     document.write("Larger number is: " + num1);
// }
// else if (num2 > num1) {
//     document.write("Larger number is: " + num2);
// }
// else {
//     document.write("Both numbers are equal.");
// }
// // ==========================
// // Question 3
// // ==========================

// var number = +prompt("Enter a number:");

// if (number > 0) {
//     document.write("Positive Number");
// }
// else if (number < 0) {
//     document.write("Negative Number");
// }
// else {
//     document.write("Zero");
// }
// // ==========================
// // Question 4
// // ==========================

// var ch = prompt("Enter a single character:");

// if (
//     ch === "a" || ch === "e" || ch === "i" ||
//     ch === "o" || ch === "u" ||
//     ch === "A" || ch === "E" || ch === "I" ||
//     ch === "O" || ch === "U"
// ) {
//     document.write(true);
// }
// else {
//     document.write(false);
// }

// // ==========================
// // Question 5
// // ==========================

// var correctPassword = "admin123";
// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// }
// else {
//     alert("Incorrect password");
// }// ==========================
// // Question 6
// // ==========================

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// document.write(greeting);

// // ==========================
// // Question 7
// // ==========================

// var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

// if (time >= 0 && time < 1200) {
//     document.write("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night!");
// }
// else {
//     document.write("Invalid Time");
// }

