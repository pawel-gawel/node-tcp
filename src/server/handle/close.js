const {
  logConnections
} = require('../util');
const { broadcast } = require('../output');

module.exports = (socket, connections) => (data) => {
  const { remoteAddress, remotePort } = socket;
  const message  = `\n> ${remoteAddress}:${remotePort} closed connection`;
  console.log(message);
  broadcast(message);
  logConnections(connections);
}