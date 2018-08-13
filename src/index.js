const { config: { host, port } } = require('../package.json');
const { createServer } = require('net');

const server = createServer((socket) => {
  socket.write('halo\r\n');
});

server.listen(port, host);