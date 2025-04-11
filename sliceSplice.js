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
  const first = courses.indexOf("Python");
  const second = courses.indexOf("Python", first + 1);
  if (second !== -1) {
    courses.splice(second, 1);
  }
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

// 4. Hospital Management App
// Original Array:
// let patients = ["Rina", "Ayaan", "Soham", "Deep", "Nisha", "Soham"];

// Scenario: Remove "Soham" as he was mistakenly added twice in the system.

let patients = ["Rina", "Ayaan", "Soham", "Deep", "Nisha", "Soham"];
console.log(patients);
if (patients.includes("Soham")) {
  const first = patients.indexOf("Soham");
  const second = patients.indexOf("Soham", first + 1);
  if (second !== -1) {
    patients.splice(second, 1);
  }
  console.log(patients);
}
console.log("");

// 5. School Admin Portal
// Original Array:
// let subjects = ["Math", "Science", "English", "History", "Geography"];

// Scenario: A student resubmitted "Science Project" — insert "Science Project (Revised)" just after "Science".

let subjects = ["Math", "Science", "English", "History", "Geography"];
console.log(subjects);
let targetSubject = "Science";
let revisedProject = targetSubject + " Project (Revised)";
let indexx = subjects.indexOf(targetSubject);
if (indexx !== -1) {
  subjects.splice(indexx + 1, 0, revisedProject);
}
console.log(subjects);
console.log("");

// 6. Movie Streaming App
// Original Array:
// let watchlist = ["Inception", "Interstellar", "Tenet", "Dunkirk"];

// Scenario: Move "Tenet" to the start of the watchlist.

let watchlist = ["Inception", "Interstellar", "Tenet", "Dunkirk"];
console.log(watchlist);
if (watchlist.includes("Tenet")) {
  const index = watchlist.indexOf("Tenet");
  const Tenet = watchlist.splice(index, 1);

  watchlist = [...Tenet, ...watchlist];
}
console.log(watchlist);
console.log("");

// 7. Warehouse Inventory System
// Original Array:
// let items = [ "Box D","Box A", "Box B", "Box C", "Box E"];

// Scenario: Due to a packing error, "Box C" and "Box D" must be removed.

let items = ["Box D", "Box A", "Box B", "Box C", "Box E"];
console.log(items);
if (items.includes("Box C")) {
  const index = items.indexOf("Box C");
  items.splice(index, 1);
}
if (items.includes("Box D")) {
  const index = items.indexOf("Box D");
  items.splice(index, 1);
}
console.log(items);
console.log("");

// 8. Finance Dashboard
// Original Array:
// let transactions = ["Salary", "Groceries", "Electricity", "Dining", "Internet"];

// Scenario: Create a snapshot of the middle 3 expenses ("Groceries" to "Dining") for analysis.

let transactions = ["Salary", "Groceries", "Electricity", "Dining", "Internet"];
console.log(transactions);
let snap;
if (transactions.includes("Groceries")) {
  const index = transactions.indexOf("Groceries");
  snap = transactions.slice(index, 4);
}
console.log(snap);
console.log("");

// 9. Property Listing Website
// Original Array:
// let properties = ["Villa", "Apartment", "Studio", "Penthouse", "Farmhouse"];

// Scenario: Display only the last 3 property types as a "Luxury Picks" carousel.

let properties = ["Villa", "Apartment", "Studio", "Penthouse", "Farmhouse"];
console.log(properties);
console.log(properties.slice(-3));
console.log("");

// 10. Emergency Alert App
// Original Array:
// let alerts = ["Fire", "Earthquake", "Flood", "Tornado", "Storm"];

// Scenario: Temporarily display only the first 3 alerts on a widget.

let alerts = ["Fire", "Earthquake", "Flood", "Tornado", "Storm"];
console.log(alerts);
console.log(alerts.slice(0, 3));
console.log("");

// 11. Travel Planner App
// Original Array:
// let itinerary = ["Flight", "Hotel", "Car Rental", "City Tour", "Dinner"];

// Scenario: The user cancelled "City Tour" — remove it from the plan.

let itinerary = ["Flight", "Hotel", "Car Rental", "City Tour", "Dinner"];
console.log(itinerary);
if (itinerary.includes("City Tour")) {
  const index = itinerary.indexOf("City Tour");
  itinerary.splice(index, 1);
}
console.log(itinerary);
console.log("");

// 12. Mental Health Tracker
// Original Array:
// let moods = ["Happy", "Anxious", "Calm", "Stressed", "Content"];

// Scenario: Move "Calm" to the end of the list to reflect mood progression.

let moods = ["Happy", "Anxious", "Calm", "Stressed", "Content"];
console.log(moods);
if (moods.includes("Calm")) {
  const index = moods.indexOf("Calm");
  const Calm = moods.splice(index, 1)[0];
  moods.push(Calm);
}
console.log(moods);
console.log("");

// 13. Task Management Tool
// Original Array:
// let tasks = ["Meeting", "Report", "Email", "Presentation", "Review"];

// Scenario: Replace "Email" with "Client Email" for clarity.

let tasks = ["Meeting", "Report", "Email", "Presentation", "Review"];
console.log(tasks);
if (tasks.includes("Email")) {
  const index = tasks.indexOf("Email");
  tasks.splice(index, 1, "Client Email");
}
console.log(tasks);
console.log("");

// 14. Daycare App
// Original Array:
// let kids = ["Aarav", "Mira", "Kabir", "Nina", "Vivaan"];

// Scenario: Insert "Snack Break" between "Kabir" and "Nina" in the daily schedule.

let kids = ["Aarav", "Mira", "Kabir", "Nina", "Vivaan"];
console.log(kids);
if (kids.includes("Kabir")) {
  const index = kids.indexOf("Kabir") + 1;
  kids.splice(index, 0, "Snack Break");
}
console.log(kids);
console.log("");

// 15. Sales CRM Dashboard
// Original Array:
// let leads = ["Google", "Amazon", "Microsoft", "Netflix", "Tesla"];

// Scenario: Remove "Netflix" and place it at the bottom for de-prioritization.

let leads = ["Google", "Amazon", "Microsoft", "Netflix", "Tesla"];
console.log(leads);
if (leads.includes("Netflix")) {
  const index = leads.indexOf("Netflix");
  const Netflix = leads.splice(index, 1)[0];
  leads.push(Netflix);
}
console.log(leads);
console.log("");
