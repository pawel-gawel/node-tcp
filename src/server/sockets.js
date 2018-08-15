const sockets = new Set();
const broadcast = (message) => sockets.forEach(
  socket => socket.write(message)
);
const add = (socket) => sockets.add(socket);
const register = (socket) => {
  const { localAddress, localPort } = socket;

  broadcast(`[${localAddress}:${localPort}] New client!\n`);
  add(socket);
}

module.exports = {
  register,
  add,
  broadcast
}
