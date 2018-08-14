const { Socket } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connect, data, end } = require('./handle');

const socket = new Socket();
socket.connect(port, 'localhost', connect(socket));
socket.on('error', console.error)
socket.on('data', data);
socket.on('close', () => {
  console.log('closing');
  socket.end();
});
socket.on('end', end);
