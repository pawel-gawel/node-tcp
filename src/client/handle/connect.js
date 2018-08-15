const terminal = require('../../terminal');

module.exports = (socket) => () => {
  const { write } = socket;

  sayHello(socket);
  terminal.on('line', terminal.defaultLineHandler(socket));
}

function sayHello(socket) {
  const { remoteAddress, remotePort } = socket;
  console.log(`Successfully connected to ${remoteAddress}:${remotePort} \n`);
}
