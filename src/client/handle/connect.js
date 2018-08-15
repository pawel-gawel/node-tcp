const terminal = require('../../terminal');

module.exports = (socket) => () => {
  const { write } = socket;

  writeHeader(socket);
  terminal.on('line', terminal.handleLine(socket));
}

function writeHeader(socket) {
  const { localAddress, localPort, remoteAddress, remotePort } = socket;
  console.log(`Successfully connected to ${remoteAddress}:${remotePort} \n`);
  socket.write(`Hey! this is ${localAddress}:${localPort}`);
}
