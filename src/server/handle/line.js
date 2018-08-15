const readline = require('readline');

const terminal = require('../../terminal');
const { broadcast, log } = require('../output');

module.exports = (line) => {
  switch (line.trim()) {
    case 'hello':
      log('\rworld!');
      break;
    default:
      broadcast(line);
      readline.moveCursor(process.stdout, 0, -1);
      break;
  }
  terminal.prompt();
}
