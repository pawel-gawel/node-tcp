const { Socket } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connect, data, close } = require('./handle');

const socket = new Socket();

socket.connect(port, host, connect(socket));

socket.on('data', data);
socket.on('close', close);
socket.on('error', console.error);
