const {
  logConnections
} = require('../util');

module.exports = (socket, connections) => (data) => {
  const { remoteAddress, remotePort } = socket;
  console.log(`\n> ${remoteAddress}:${remotePort} closed connection`);
  logConnections(connections);
}