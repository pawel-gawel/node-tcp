const readline = require('readline');

const terminal = require('../../terminal');

module.exports = (socket) => (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('\rworld!');
      break;
    default:
      socket.write(line);
      readline.moveCursor(process.stdout, 0, -1);
      break;
  }
  terminal.prompt();
}
