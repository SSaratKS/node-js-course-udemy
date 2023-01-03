const fs = require('fs');

// function requestHandler(req,res) {
//   console.log(req.url, req.method, req.headers);
// }

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></header>');
    /* reditecting to "/message" */
    res.write(
      '<body><form action="/message" method="POST"> \
                    <input type="text" name="message"><button type="submit">Send \
                    </button></input></form></h1></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    /* create an event listner for the data received */
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    /* ending the event listner to be executed in the future */
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      /* capturing the input from the buffered parsedBody named "message" */
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        /* redirecting back to "/" after writing the file */
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  /* Default text */
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></header>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = {
  handler: requestHandler,
  someText: 'Some hard coded text!',
};

/* Alternative export syntax */
// module.exports.handler = requestHandler;
// module.exports = requestHandler;

/* using ONLY exports is specific shortcut for node js */
// exports.handler = requestHandler;
