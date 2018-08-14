const connectionsCount = require('../util/connections-count');

module.exports = server => socket => {
  const connections = connectionsCount(server);

  socket.on('data', data(socket));
  socket.on('close', close(socket, connections))
  socket.on('error', console.error);

  hello(socket, connections);
  process.stdin.pipe(socket);
}

function hello(socket, connections) {
  const { localAddress, localPort, remoteAddress, remotePort } = socket;

  socket.write(`Welcome to ${localAddress}:${localPort}`);

  console.log(`\n> ${remoteAddress}:${remotePort} connected`);
  connections(count => console.log(`> Connections: ${count}\n`));
}

function data(socket) {
  return function (data) {
    const { remoteAddress, remotePort } = socket;
    console.log(`[${remoteAddress}:${remotePort}]:`, data.toString());
  }
}

function close(socket, connections) {
  return function (data) {
    const { remoteAddress, remotePort } = socket;
    console.log(`\n> ${remoteAddress}:${remotePort} closed connection`);
    connections(count => console.log(`> Connections: ${count}\n`));
  }
}
