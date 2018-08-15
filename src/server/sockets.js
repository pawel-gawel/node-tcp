const output = require('./output');

const sockets = new Set();

const broadcast = (message) => sockets.forEach(socket => socket.write(message));

const send = (message) => output.write(message);

const add = (socket) => sockets.add(socket);

const register = (socket) => {
  const { remoteAddress, remotePort } = socket;

  broadcast(`[${remoteAddress}:${remotePort}] New client!\n`);
  add(socket);
  output.pipe(socket);
}

module.exports = {
  register,
  add,
  broadcast,
  send
}
