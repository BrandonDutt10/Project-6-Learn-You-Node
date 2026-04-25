// We need the HTTP module to create a web server
const http = require('http');

// We need the filesystem module to read files
const fs = require('fs');

// Get the port and file path from command-line arguments
const port = process.argv[2];
const filePath = process.argv[3];

// Create the HTTP server
const server = http.createServer(function (req, res) {

  // Create a readable stream from the file
  const stream = fs.createReadStream(filePath);

  // Pipe file directly to HTTP response
  stream.pipe(res);

  // Handle errors (important for safety)
  stream.on('error', function (err) {
    res.end('Error reading file');
  });

});

// Start listening on the given port
server.listen(port);