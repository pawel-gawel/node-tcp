module.exports = (socket) => () => {
  const { write } = socket;

  writeHeader(socket);
  process.stdin.pipe(socket);
}

function writeHeader(socket) {
  const { localAddress, localPort, remoteAddress, remotePort } = socket;
  console.log(`Successfully connected to ${remoteAddress}:${remotePort} \n`);
  socket.write(`Hey! this is ${localAddress}:${localPort}`);
}
