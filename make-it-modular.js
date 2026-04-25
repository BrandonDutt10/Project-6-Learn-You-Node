// Helps us safely build a path to our module file
const path = require('path')

// Load our custom module using an absolute-safe path
const mymodule = require(path.join(__dirname, 'mymodule'))

/*
  Command-line inputs:
  process.argv[2] = folder path
  process.argv[3] = file extension filter
*/
const folder = process.argv[2]
const ext = process.argv[3]

// Call the module and handle results
mymodule(folder, ext, function (err, data) {

  // If there’s an error, print it and stop
  if (err) {
    return console.error(err)
  }

  // Print each file on its own line
  data.forEach(function (file) {
    console.log(file)
  })
})
