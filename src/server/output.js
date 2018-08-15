const { PassThrough } = require('stream');

const output = new PassThrough();

const broadcast = (message) => output.write(message);

const log = console.log;

const register = (socket) => {
  const { remoteAddress, remotePort } = socket;

  broadcast(`[${remoteAddress}:${remotePort}] Connected\n`);
  output.pipe(socket);
}

module.exports = {
  broadcast,
  log,
  register
}
