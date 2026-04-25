// We use Node's built-in http module to make web requests
const http = require('http');

// The URL comes from the command line (after "node http-client.js")
const url = process.argv[2];

// Make a GET request to the URL
http.get(url, function (response) {

  // Tell Node we want text (not raw buffers)
  response.setEncoding('utf8');

  // When data comes in, print it immediately
  response.on('data', function (chunk) {
    console.log(chunk);
  });

  // Optional: handle errors (good practice)
  response.on('error', function (err) {
    console.error(err);
  });

});