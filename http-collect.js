// We use Node's built-in http module to make a GET request
const http = require('http');

// Get the URL from command-line arguments
const url = process.argv[2];

// This will store all incoming data chunks
let result = "";

// Make the HTTP GET request
http.get(url, function (response) {

  // Ensure data comes in as text (not Buffer objects)
  response.setEncoding('utf8');

  // Collect each chunk of data as it arrives
  response.on('data', function (chunk) {
    result += chunk;
  });

  // When the response is fully received, print results
  response.on('end', function () {

    // First line: number of characters received
    console.log(result.length);

    // Second line: full content
    console.log(result);
  });

  // Handle errors (good practice)
  response.on('error', function (err) {
    console.error(err);
  });

});