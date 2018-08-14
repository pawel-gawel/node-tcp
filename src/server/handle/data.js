module.exports = socket => data => {
  const { remoteAddress, remotePort } = socket;
  console.log(`[${remoteAddress}:${remotePort}]:`, data.toString());
}
