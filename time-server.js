// We use Node's net module to create a TCP server
const net = require('net');

// Get the port from command line
const port = process.argv[2];

// Helper function to format numbers with leading zeros
function pad(n) {
  return n < 10 ? '0' + n : n;
}

// Create the server
const server = net.createServer(function (socket) {

  // Get current date and time
  const date = new Date();

  // Build formatted string: YYYY-MM-DD hh:mm
  const formatted =
    date.getFullYear() + '-' +
    pad(date.getMonth() + 1) + '-' +
    pad(date.getDate()) + ' ' +
    pad(date.getHours()) + ':' +
    pad(date.getMinutes());

  // Send data and close connection
  socket.end(formatted + '\n');
});

// Start listening on the given port
server.listen(port);