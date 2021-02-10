const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', (server) => {
    console.log('Connected to the server');
    conn.write('Name: SAM');
    // conn.write('Move: up');
  });

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = connect;