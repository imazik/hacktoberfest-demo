var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><head><title>Nodejs is awesome!</title></head><body><p>Congratulations! The Nodejs HTTP Server is working!</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(8080); //6 - listen for any incoming requests

console.log('Node.js web server at port 8080 is running..')
