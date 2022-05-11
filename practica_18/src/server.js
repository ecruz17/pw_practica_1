let express = require('express'); //utilización de express para el archivo
let app = express() //creación de app para el servidor
let personsRoute = require('./routes/person'); //se agreaga el router que creamos en routes

app.set('view engine', 'ejs'); //se setea ejs como view engine
app.use(personsRoute); //utilizamos el personsRoute como router de la app
app.use('/assets', express.static(__dirname + '/public')); //hacemos uso de la carpeta assets

let PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('Escuchando en el puerto 3000'); //respuesta del servidor en ruta raíz
});