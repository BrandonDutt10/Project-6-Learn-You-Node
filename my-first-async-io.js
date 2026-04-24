// We're using Node's file system module so we can read files
const fs = require('fs');

// This is the file path we get from the command line
// Example: node my-first-async-io.js file.txt
const filePath = process.argv[2];

// We read the file asynchronously (this means it doesn't freeze the program)
// Node will come back later with either an error or the file data
fs.readFile(filePath, 'utf8', function (err, data) {

  // If something went wrong while reading the file, show the error
  if (err) {
    return console.error(err);
  }

  // Turn the file into an array of lines by splitting on '\n'
  const lines = data.split('\n');

  // The number of newlines is one less than the number of lines
  console.log(lines.length - 1);
});