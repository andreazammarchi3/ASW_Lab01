var http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.end();//to close the response
});

server.listen(8080, () => {
    console.log('Server in esecuzione su http://localhost:8080');
})
