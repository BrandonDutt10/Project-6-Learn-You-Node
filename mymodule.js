// We need fs to read directories
const fs = require('fs')

// We use path to safely check file extensions
const path = require('path')

/*
  This module exports One function.

  It reads a directory, filters files by extension,
  then returns the result through a callback.
*/
module.exports = function (dir, ext, callback) {

  // Read all files in the given directory
  fs.readdir(dir, function (err, files) {

    // If something went wrong, stop and return the error
    if (err) {
      return callback(err)
    }

    // Keep only files that match the extension (e.g. ".txt")
    const filtered = files.filter(function (file) {
      return path.extname(file) === '.' + ext
    })

    // Send back the filtered list
    callback(null, filtered)
  })
}
