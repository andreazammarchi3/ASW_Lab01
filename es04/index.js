const express = require('express');
const app = express();

const colors = require('./colors.json');

app.set('view engine', 'pug');

app.use(express.urlencoded());
app.use(express.static('public'));

app.locals.title = "My web site";
app.locals.email = "io@me.it";

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

app.get('/tehello/:name', (req, res) => {
    res.render("hello", {
        name: req.params.name,
        title: app.locals.title,
        email: app.locals.email
    });
});

app.get('/conta/:numero', (req, res) => {
    nums = [];
    for (let i = 0; i <= req.params.numero; i++) {
        nums.push(i);
    }
    res.render("visualizza_numeri", {numeri: nums});
});




app.use((req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Ops... Pagina non trovata');
});

app.listen(8080, () => {
    console.log('server running on http://localhost:8080');
});