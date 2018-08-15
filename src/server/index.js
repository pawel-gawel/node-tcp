const { createServer } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connection, line } = require('./handle');
const terminal = require('../terminal');

const server = createServer();

terminal.on('line', line);
server.on('connection', connection(server));

server.listen(port, host);
