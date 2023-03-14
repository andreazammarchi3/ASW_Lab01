const express = require('express');
const app = express();

const colors = require('./colors.json');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/ciao', (req, res) => {
    // req.body;
    res.send('<h1>Ciao express</h1>');
});

app.get('/', (req, res) => {
    res.send('<h1>GET express</h1>');
});

app.get('/colors', (req, res) => {
    res.json(colors);
});

app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/public/contacts-no-css.html');
});

app.get('/sayhello/:name', (req, res) => {
    res.send("Hello " + req.params.name + "!");
});




app.use((req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Ops... Pagina non trovata');
});

app.listen(8080, () => {
    console.log('server running on http://localhost:8080');
});