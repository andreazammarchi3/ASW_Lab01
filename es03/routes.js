const requestHandler = (req, res) => {
    //implementare qui la logica di gestione della richiesta e della risposta
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html lang="it">');
        res.write('<head><title>Inserisci messaggio</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>INVIA</button></form></body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.writeHead(302, {'Location': '/'});
        res.end();
    }
}

//esportare qui la funzione implementata
exports.handler = requestHandler;
