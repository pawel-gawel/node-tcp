const { createServer } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connection } = require('./handle');

const server = createServer();

server.on('connection', connection(server));

server.listen(port, host);
