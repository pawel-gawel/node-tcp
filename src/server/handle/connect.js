const data = require('./data');
const close = require('./close');
const {
  connectionsCount,
  logConnections
} = require('../util');

module.exports = server => socket => {
  const connections = connectionsCount(server);

  handle(socket, connections);
  sayHello(socket, connections);
}

function handle(socket, connections) {
  socket.on('data', data(socket));
  socket.on('close', close(socket, connections))
  socket.on('error', console.error);

  process.stdin.pipe(socket);
}

function sayHello(socket, connections) {
  const { localAddress, localPort, remoteAddress, remotePort } = socket;

  socket.write(`Welcome to ${localAddress}:${localPort}`);

  console.log(`\n> ${remoteAddress}:${remotePort} connected`);
  logConnections(connections);
}
