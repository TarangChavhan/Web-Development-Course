const http = require('http');

const port = process.argv;

http.createServer((req, resp) => {

    resp.write(`Server is Running... ${port[2]} is used...`);

    resp.end();

}).listen(port[2]);