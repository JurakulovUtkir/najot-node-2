// Importing CommonJS module
const { add, subtract } = require('./math.js');

// Importing ES Module (need to use async IIFE because top-level await might not be available)
import('./math.mjs').then(({ multiply, divide }) => {
    // Testing all functions
    console.log('Addition:', add(10, 5));        // 15
    console.log('Subtraction:', subtract(10, 5)); // 5
    console.log('Multiplication:', multiply(10, 5)); // 50
    console.log('Division:', divide(10, 5));     // 2
});