const { createServer } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connect } = require('./handle');

const server = createServer();

server.on('connection', connect(server));

server.listen(port, host);
