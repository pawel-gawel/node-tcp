function(data) {
  console.log('Received: ' + data);
  client.destroy(); // kill client after server's response
}
