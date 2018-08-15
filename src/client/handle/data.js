const terminal = require('../../terminal');

module.exports = function (data) {
  console.log(`\r[server]: ${data.toString().trim()}`);
  terminal.prompt();
}
