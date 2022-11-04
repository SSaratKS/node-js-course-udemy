const http = require('http');
const routes = require('./routes');

// const server = http.createServer((req, res) => {
//   /* Ending the server using exit() */
//   // process.exit();
// });

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
