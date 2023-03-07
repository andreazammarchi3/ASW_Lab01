const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes.handler);
server.listen(8080, ()=>{
    console.log("Server in ascolto su http://localhost:8080")
});