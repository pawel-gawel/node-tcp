const terminal = require('../../terminal');

module.exports = function (data) {
  let message = data.toString().trim();
  message = '\r'
    .concat(message.startsWith('[') ? '' : '[server]: ')
    .concat(message);
  console.log(message)
  //console.log(`\r[server]: ${data.toString().trim()}`);
  terminal.prompt();
}
