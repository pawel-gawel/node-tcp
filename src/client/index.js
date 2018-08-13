const { Socket } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connect } = require('./handle');

const client = new Socket();
client.connect(port, host, connect);
client.on('data', data);
client.on('close', close);
