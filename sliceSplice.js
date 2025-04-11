// 1. HR Management System
// Original Array:
// let employees = ["Amit", "Sneha", "Ravi", "John", "Neha"];
// Scenario: Move "John" to the top of the list so he appears first in the employee dashboard.

let employees = ["Amit", "Sneha", "Ravi", "John", "Neha"];
console.log(employees);
if (employees.includes("John")) {
  let index = employees.indexOf("John");
  let john = employees.splice(index, 1)[0];
  employees.unshift(john);
  console.log(employees);
}
console.log("");

//  2. Online Learning Platform
// Original Array:
// let courses = ["HTML", "CSS", "JavaScript", "Python", "SQL"];

// Scenario: A student mistakenly enrolled in "Python" twice. Remove the second instance.

let courses = ["HTML", "CSS", "JavaScript", "Python", "SQL", "Python"];
console.log(courses);
if (courses.includes("Python")) {
  let index = courses.lastIndexOf("Python");
  courses.splice(index, 1);
  console.log(courses);
}
console.log("");
// <------------------------------------------------------------->
let coursess = ["HTML", "CSS", "JavaScript", "Python", "SQL"];
let firstIndex = coursess.indexOf("Python");
let secondIndex = coursess.indexOf("Python", firstIndex + 1);
if (secondIndex !== -1) {
  coursess.splice(secondIndex, 1);
}
console.log(coursess);
console.log("");

// 3. E-commerce Website
// Original Array:
// let cart = ["T-shirt", "Shoes", "Jeans", "Cap"];

// Scenario: Insert a "Wallet" item right after "Shoes".

let cart = ["T-shirt", "Shoes", "Jeans", "Cap"];
console.log(cart);
let index = cart.indexOf("Shoes") + 1;
cart.splice(index, 0, "Wallet");
console.log(cart);
console.log("");
