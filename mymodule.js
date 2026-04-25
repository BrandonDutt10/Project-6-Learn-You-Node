const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err)

    const result = files.filter(file =>
      path.extname(file) === '.' + ext
    )

    callback(null, result)
  })
}