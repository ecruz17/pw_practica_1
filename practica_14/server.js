var express = require('express');
var app = express(); 

var port = process.env.PORT || 3000; 

app.use('/assets', express.static(__dirname + '/public')); //localizamos el path de public

app.set('view engine', 'ejs'); //se setea el view engine de la app como EJS



app.get('/', function(req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>index</title>
        <link rel="stylesheet" href="assets/style.css" type="text/css"/> 
    </head>
    <body>
        <h1>Hola Mundoo</h1>
        <p>Este parrafo debe ser azul</p>
    </body>
    </html>`
    ); //pintamos el html del index en la ruta raíz
});


app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id, Msg: req.query.msg, Times: req.query.times }); //pasamos dos keys, el id y el qstr
}); 


app.listen(port);
