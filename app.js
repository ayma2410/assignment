

// // Question 1
// var studentNames = [];

// // Question 2
// var studentNames = new Array();

// // Question 3
// var fruits = ["Apple", "Banana", "Mango", "Orange"];

// // Question 4
// var numbers = [10, 20, 30, 40, 50];

// // Question 5
// var booleanArray = [true, false, true, false];

// // Question 6

// var mixedArray = ["Ali", 20, true, 45.5];
// document.write(mixedArray + "<br><br>");

// // Question 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write("<h3>Qualifications:</h3>");

// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// // Question 8

// var students = ["Ali", "Ahmed", "Sara"];
// var scores = [400, 450, 380];

// for (var i = 0; i < students.length; i++) {
//     var percentage = (scores[i] / 500) * 100;
//     document.write("Score of " + students[i] + " is " + scores[i] +
//     ". Percentage: " + percentage + "%<br>");
// }

// // Question 9

// var colors = ["Red", "Green", "Blue"];

// document.write(colors + "<br>");

// var color1 = prompt("Enter color to add at beginning:");
// colors.unshift(color1);
// document.write(colors + "<br>");

// var color2 = prompt("Enter color to add at end:");
// colors.push(color2);
// document.write(colors + "<br>");

// colors.unshift("Black", "White");
// document.write(colors + "<br>");

// colors.shift();
// document.write(colors + "<br>");

// colors.pop();
// document.write(colors + "<br>");

// var index = +prompt("Enter index to add color:");
// var newColor = prompt("Enter color name:");
// colors.splice(index, 0, newColor);
// document.write(colors + "<br>");

// var delIndex = +prompt("Enter index to delete:");
// var delCount = +prompt("How many colors to delete?");
// colors.splice(delIndex, delCount);
// document.write(colors + "<br>");

// // Question 10

// var scores = [320, 230, 480, 120];
// document.write("Scores: " + scores + "<br>");

// scores.sort(function(a, b) {
//     return a - b;
// });

// document.write("Ordered Scores: " + scores);

// // Question 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(1, 4);

// document.write("Cities: " + cities + "<br>");
// document.write("Selected Cities: " + selectedCities);

// // Question 12

// var arr = ["This", "is", "my", "cat"];
// var result = arr.join(" ");

// document.write(result);

// // Question 13

// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// document.write(devices.shift() + "<br>");
// document.write(devices.shift() + "<br>");
// document.write(devices.shift() + "<br>");
// document.write(devices.shift() + "<br>");

// // Question 14

// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// document.write(devices.pop() + "<br>");
// document.write(devices.pop() + "<br>");
// document.write(devices.pop() + "<br>");
// document.write(devices.pop() + "<br>");