var express = require('express');
var app = express(); //se declara una app de express

var port = process.env.PORT || 3000; //puerto para que el servidor escuche

app.use('/assets', express.static(__dirname + '/public'));//se especifica a express la carpeta a mapear para tomar la stylesheet y que el directorio virtual se llamará assets

app.use('/', function(req, res, next) {
    console.log(`Request Url: ${req.url}`); //imprime en consola la ruta en la que se encuentra el usuario
    next();
});

//primer ruta a nivel raíz
app.get('/', function(req, res) {
    res.send(`<html><head>
                        <link rel="stylesheet" href="assets/style.css" type="text/css"/>
                    </head>
            <body><h1>Hola servidor!</h1></body>
            </html>`);
});

//segunda ruta "api" que regresa un JSON
app.get('/api', function(req, res){
    res.json({ firstname: 'Emir', lastname: 'Cruz' });
});

//tercer ruta con parámetro
app.get('/person/:id', function(req, res){
    res.send(`<html><head></head><body><h1>Person: ${req.params.id} </h1></body></html`); //respuesta del servidor al acceder a la ruta person pasándole un parámetro como req
}); 

app.listen(port); //levanta el server y lo pone a la escucha
