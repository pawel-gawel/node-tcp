const { createServer } = require('net');
const { config: { host, port } } = require('../../package.json');

const server = createServer((socket) => {
  socket.write('halo\r\n');
});

server.listen(port, host);