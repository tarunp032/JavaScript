//  1. HR System – Email Notify All Employees
const employees = ["a@company.com", "b@company.com"];
employees.forEach(email => console.log(`Sending email to ${email}`));
console.log(""); 

//  2. Hospital – SMS Reminders to Patients
const patients = ["9876543210", "9123456780"];
patients.forEach(number => console.log(`Sending SMS to ${number}`));
console.log("");

//  3. Doctor Portal – Sync Profiles to API
const doctors = ["Dr. Sharma", "Dr. Bose"];
doctors.forEach(name => {
  // dummy API call
  console.log(`Syncing profile for ${name}`);
});
console.log("");

//  4. Medicine Reminder System – Notify Patients
const reminders = [
  { name: "Ravi", medicine: "Paracetamol" },
  { name: "Tina", medicine: "Antacid" }
];
reminders.forEach(r => console.log(`Reminder: ${r.name}, take ${r.medicine}`));
console.log("");

//  5. Audit Log Writer
const actions = ["login", "viewed report", "logout"];
actions.forEach(act => console.log(`Action logged: ${act}`));
console.log("");

//  6. EdTech – Notify Students of Assignment Due
const students = ["Ayan", "Neha", "Tushar"];
students.forEach(name => console.log(`${name}, your assignment is due tomorrow!`));
console.log("");

//  7. HR – Log Late Entries
const entries = [
  { name: "Rita", late: true },
  { name: "Ajay", late: false },
  { name: "Zara", late: true }
];
entries.forEach(e => {
  if (e.late) console.log(`Late entry logged for ${e.name}`);
});
console.log("");

//  8. eCommerce – Log Each Order for Audit
const orders = [
  { id: 1, value: 2500 },
  { id: 2, value: 3200 }
];
orders.forEach(o => console.log(`Order ${o.id} logged. Value: ₹${o.value}`));
console.log("");

//  9. Hospital Admin – Mark All Rooms for Cleaning
const rooms = [101, 102, 103];
rooms.forEach(r => console.log(`Room ${r} marked for cleaning`));
console.log("");

//  10. Course Tracker – Console All Enrolled Courses
const courses = ["React", "Data Structures", "System Design"];
courses.forEach(c => console.log(`Course enrolled: ${c}`));
console.log("");