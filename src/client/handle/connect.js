module.exports = (socket) => () => {
  const { write } = socket;

  writeHeader(socket);
  process.stdin.pipe(socket);
}

function writeHeader(socket) {
  const { localAddress, remoteAddress } = socket;
  console.log('Connected to', remoteAddress);
  socket.write(`Hey! this is ${localAddress}`);
}
