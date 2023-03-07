const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/studente',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<form action="/studente" method="POST"><input type="text" name="studente"><button type="submit">aggiungi</button></form>');
})

app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000');
})