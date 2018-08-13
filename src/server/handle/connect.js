module.exports = connect;

function connect(connection) {
  connection.write('halo\r\n');;
  // connection.end();
}
