const terminal = require('../../terminal');

module.exports = (socket) => () => {
  const { write } = socket;

  sayHello(socket);
  terminal.on('line', terminal.handleLine(socket));
}

function sayHello(socket) {
  const { localAddress, localPort, remoteAddress, remotePort } = socket;
  console.log(`Successfully connected to ${remoteAddress}:${remotePort} \n`);
}
