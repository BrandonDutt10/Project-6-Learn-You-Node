// HTTP module lets us create a web server
const http = require('http');

// We will need to read incoming request data as text
const server = http.createServer(function (req, res) {

  // We only accept POST requests
  if (req.method !== 'POST') {
    return res.end('Send POST requests only\n');
  }

  let body = '';

  // Collect incoming data chunks
  req.on('data', function (chunk) {
    body += chunk.toString();
  });

  // When request is finished, transform and respond
  req.on('end', function () {

    // Convert everything to uppercase
    const upper = body.toUpperCase();

    // Send response back
    res.end(upper);
  });

});

// Listen on the port provided
server.listen(process.argv[2]);