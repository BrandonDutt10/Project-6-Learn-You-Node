// HTTP server for handling API requests
const http = require('http');
const url = require('url');

// Create server
const server = http.createServer(function (req, res) {

  // Parse the incoming URL and query string
  const parsedUrl = new URL(req.url, 'http://localhost');
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.searchParams.get('iso');

  let result;

  // Route 1: /api/parsetime
  if (pathname === '/api/parsetime') {

    const date = new Date(iso);

    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

  // Route 2: /api/unixtime
  } else if (pathname === '/api/unixtime') {

    const date = new Date(iso);

    result = {
      unixtime: date.getTime()
    };

  }

  // Send JSON response
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }

});

// Start server on provided port
server.listen(process.argv[2]);