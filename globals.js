// 1. Display current file path and name
console.log("File path:", __filename);
console.log("Directory path:", __dirname);

// 2. Add two numbers from command line arguments
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (!isNaN(num1) && !isNaN(num2)) {
  console.log("Sum of arguments:", num1 + num2);
} else {
  console.log("Please provide two valid numbers as arguments");
}

// 3. Show compilation platform
console.log("Platform:", process.platform);

// File path: /Users/startup/learnings/node 2/globals.js
// Directory path: /Users/startup/learnings/node 2
// Sum of arguments: 8
// Platform: darwin
