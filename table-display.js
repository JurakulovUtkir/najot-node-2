// Users data as an array of objects
const users = [
  { name: "Alice", age: 25, profession: "Developer" },
  { name: "Bob", age: 30, profession: "Designer" },
  { name: "Charlie", age: 28, profession: "Manager" },
  { name: "Diana", age: 27, profession: "Engineer" },
];

// Employees data as an array
const employees = [
  [1, "John Smith", "Senior Developer", 5000],
  [2, "Sarah Johnson", "Project Manager", 6000],
  [3, "Michael Brown", "UI Designer", 4500],
  [4, "Emma Wilson", "DevOps Engineer", 5500],
];

// Display users table
console.log("\nUsers List:");
console.table(users);

// Display employees table
console.log("\nEmployees List:");
console.table([["ID", "Name", "Position", "Salary"], ...employees]);
