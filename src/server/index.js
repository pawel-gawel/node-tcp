const { createServer } = require('net');
const { config: { host, port } } = require('../../package.json');
const { connect } = require('./handle');

const server = createServer(connect);

server.on('connection', () => {
    server.getConnections((err, count) => {
    if (err) {
      throw Error(err);
    }
    console.log(count);
  });
})

server.listen(port, host);
