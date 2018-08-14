module.exports = connect;

function connect(socket) {
  const { localAddress, localPort } = socket;
  socket.write(`Welcome to ${localAddress}:${localPort}`);

  process.stdin.pipe(socket);

  socket.on('data', (data) => {
    const { remoteAddress, remotePort } = socket;
    console.log(`[${remoteAddress}:${remotePort}]:`, data.toString());
  });

  socket.on('error', console.error);
  // socket.end();
}
