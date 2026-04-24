// This program reads a file synchronously and counts the number of newlines

// Load the built-in filesystem module
// This gives us access to file reading functions
const fs = require('fs');

// Get the file path from the command-line argument
const filePath = process.argv[2];

// Read the file synchronously 
// This returns a Buffer 
const buffer = fs.readFileSync(filePath);

// Convert the Buffer into a string so we can work with it
const fileContent = buffer.toString();

// Split the string by newline character "\n"

const lines = fileContent.split('\n');

// The number of newlines is one less than the number of lines
console.log(lines.length - 1);