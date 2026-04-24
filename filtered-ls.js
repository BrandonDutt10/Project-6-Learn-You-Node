// We need the file system module to read directories
const fs = require('fs');

// We also use the path module to easily check file extensions
const path = require('path');

// First argument = folder path
const folderPath = process.argv[2];

// Second argument = file extension we want (like 'txt')
const extension = process.argv[3];

// Read the directory asynchronously
fs.readdir(folderPath, function (err, files) {

  // If something goes wrong, show the error and stop
  if (err) {
    return console.error(err);
  }

  // Loop through all files in the directory
  files.forEach(function (file) {

    // Get the file extension (example: '.txt')
    const fileExt = path.extname(file);

    // Check if it matches what we are looking for
    // We add '.' because extension input does NOT include it
    if (fileExt === '.' + extension) {
      console.log(file);
    }
  });
});