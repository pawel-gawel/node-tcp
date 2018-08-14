module.exports = (server) => () => {
  server.getConnections((err, count) => {
    if (err) {
      throw Error(err);
    }
    console.log('connections:', count);
  });
}