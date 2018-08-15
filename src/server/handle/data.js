const terminal = require('../../terminal');

module.exports = socket => data => {
  const { remoteAddress, remotePort } = socket;
  console.log(`\r[${remoteAddress}:${remotePort}]:`, data.toString().trim());
  terminal.prompt();
}
