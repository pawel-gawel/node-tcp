const terminal = require('../../terminal');

module.exports = function (data) {
  let message = data.toString().trim();
  message = '\r'
    .concat(message.startsWith('[') ? '' : '[server]: ')
    .concat(message);
  console.log(message)
  terminal.prompt();
}
