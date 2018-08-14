module.exports = connections => {
  connections(count => console.log(`> Connections: ${count}\n`));
}
