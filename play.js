const connect = require('./client');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

console.log('Connecting ...');
connect();
setupInput();

module.exports = {
  handleUserInput,
  setupInput
}