const terminal = require('../../terminal');
const output = require('../output');

module.exports = socket => data => {
  const { remoteAddress, remotePort } = socket;
  const message = `\r[${remoteAddress}:${remotePort}]: ${data.toString().trim()}`;
  console.log(message);
  output.write(message);
  terminal.prompt();
}
