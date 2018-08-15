const { PassThrough } = require('stream');

const output = new PassThrough();

const broadcast = (message) => output.write(message);

const register = (socket) => {
  const { remoteAddress, remotePort } = socket;

  broadcast(`[${remoteAddress}:${remotePort}] New client!\n`);
  output.pipe(socket);
}

module.exports = {
  broadcast,
  register
}
