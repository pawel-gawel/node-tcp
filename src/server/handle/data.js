const terminal = require('../../terminal');
const { broadcast } = require('../output');

module.exports = socket => data => {
  const { remoteAddress, remotePort } = socket;
  const message = `\r[${remoteAddress}:${remotePort}]: ${data.toString().trim()}`;
  console.log(message);
  broadcast(message);
  terminal.prompt();
}
