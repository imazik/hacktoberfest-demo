var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/nodejs') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><head><title>Nodejs is awesome!</title></head><body><p>Congratulations! The Nodejs HTTP Server is working!</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');

});

server.listen(8001);
console.log('Node.js web server at port 8001 is running..')
