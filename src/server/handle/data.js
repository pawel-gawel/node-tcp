const terminal = require('../../terminal');
const { broadcast, log } = require('../output');

module.exports = socket => data => {
  const { remoteAddress, remotePort } = socket;
  const message = `\r[${remoteAddress}:${remotePort}]: ${data.toString().trim()}`;
  log(message);
  broadcast(message);
  terminal.prompt();
}
