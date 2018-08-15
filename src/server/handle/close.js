const { logConnections } = require('../util');
const { broadcast, log } = require('../output');

module.exports = (socket, connections) => (data) => {
  const { remoteAddress, remotePort } = socket;
  const message  = `\n[${remoteAddress}:${remotePort}] Closed connection`;
  log(message);
  broadcast(message);
  logConnections(connections);
}