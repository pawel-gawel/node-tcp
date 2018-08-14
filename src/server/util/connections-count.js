module.exports = (server) => (cb) => {
  server.getConnections((err, count) => {
    if (err) {
      throw Error(err);
    }
    cb(count);
  });
}