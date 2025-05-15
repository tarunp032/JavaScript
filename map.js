const patientIds = [123, 456, 789];
const patientData = patientIds.map((id)=> `https://www.google.com/${id}`);
console.log(patientData);
console.log("");



const aadharnum = [
  "123456789012", "234567890123", "345678901234", "456789012345", "567890123456"
];
const newno = aadharnum.map((adno) =>
  adno.replace(adno.slice(0, 8), "**** **** ")
);
console.log(newno);
console.log("");
