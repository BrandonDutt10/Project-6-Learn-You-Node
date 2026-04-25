// We use Node's http module to make GET requests
const http = require('http');

// We will store results in an array so we can preserve order
const results = [];

// Track how many responses we’ve received
let count = 0;

// Helper function to make a request and store result at correct index
function getUrl(index) {
  const url = process.argv[2 + index];

  http.get(url, function (response) {
    response.setEncoding('utf8');

    let data = '';

    // Collect chunks of data
    response.on('data', function (chunk) {
      data += chunk;
    });

    // When response finishes, store it in correct position
    response.on('end', function () {
      results[index] = data;
      count++;

      // When all 3 requests are done, print results in order
      if (count === 3) {
        results.forEach(function (item) {
          console.log(item);
        });
      }
    });

    response.on('error', function (err) {
      console.error(err);
    });
  });
}

// Make 3 requests
getUrl(0);
getUrl(1);
getUrl(2);