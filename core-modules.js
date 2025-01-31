const fs = require('fs');
const path = require('path');
const os = require('os');

// Create and write to file using fs module
const filePath = path.join(__dirname, 'hello.txt');
fs.writeFileSync(filePath, 'Hello, Node.js!');

// Read file content and display it
const fileContent = fs.readFileSync(filePath, 'utf8');
console.log('File content:', fileContent);

// Display file path using path module
console.log('File path:', filePath);

// Get OS information using os module
console.log('\nOS Information:');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU cores:', os.cpus().length);
console.log('Total memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Free memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('User home directory:', os.homedir());