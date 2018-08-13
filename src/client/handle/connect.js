module.exports = function() {
  console.log('Connected');
  client.write('Hello, server! Love, Client.');
}
