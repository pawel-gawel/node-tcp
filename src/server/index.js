const { createServer } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connect } = require('./handle');
const { connectionsCount } = require('./util');

const server = createServer(connect);
const count = connectionsCount(server);

server.on('connect', count);
server.on('end', count);

server.listen(port, host);
