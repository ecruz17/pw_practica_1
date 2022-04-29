var express = require('express');

var app = express(); 

const bp = require('body-parser'); //requerimos el bodyparser como variable
app.use(bp.json());
app.use(bp.urlencoded({extended: true})); //métodos para parsear el body del index

var port = process.env.PORT || 3000; 

//app.use(express.urlencoded({extended: false}));//indicamos que utilizaremos el parsing de url dentro del body

app.set('view engine', 'ejs'); //se setea el view engine de la app como EJS


app.get('/', function(req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>index</title>
    </head>
    <body>
        <h1>Hola Mundoo</h1>
    </body>
    </html>`
    ); //pintamos el html del index en la ruta raíz
});


app.get('/student', function(req, res) { //creamos la ruta de index
    res.render('index'); //la pintamos en el navegador
});

app.post('/student', function(req, res) { //creamos el metodo POST
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`); //y la función que regresará los datos al oprimir submit
});

app.listen(port);
