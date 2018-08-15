const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

terminal.defaultLineHandler = (stream) => (line) => {
  stream.write(line);
  readline.moveCursor(process.stdout, 0, -1);
  terminal.prompt();
}

module.exports = terminal;
