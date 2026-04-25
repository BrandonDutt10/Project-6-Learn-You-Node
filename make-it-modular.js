const path = require('path')
const mymodule = require(path.join(__dirname, 'mymodule'))

mymodule(process.argv[2], process.argv[3], function (err, data) {
  if (err) return console.error(err)

  data.forEach(file => console.log(file))
})