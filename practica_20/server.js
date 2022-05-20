const express = require('express'); //importamos express
const mongoose = require('mongoose'); //importamos mongoose en el proyecto
const personsRoutes = require('./routes/persons'); //importamos el router de persons
mongoose.Promise = global.Promise;
const app = express(); //creamos la app


app.set('view engine', 'ejs'); //configuramos el view engine de la app
app.use(express.urlencoded({extended : false})); //hacemos que se utilize el url encoded
app.use(personsRoutes);//hacemos que la app utilice las rutas

mongoose.connect('mongodb+srv://dbAdmin:NdNffRYhiyAQHNsb@webprogrammingpractice.jhnha.mongodb.net/WebProgrammingPractice?retryWrites=true&w=majority', { //url de comexión con base de datos
    useNewUrlParser: true, //setting de parseo de url para usuario
    useUnifiedTopology: true //setting de conexión de topología indefinida
    }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "error de conexión: "));
db.once("open", function () {
    console.log("conexión exitosa!");
});


// .then(console.log(`Base de datos conectada`)) //si la conexión es exitosa, se imprime este mensaje
// .catch(err => console.log(err)); //si la conexión falla, se imprime en consola el error

let PORT = process.env.PORT || 3000; //puerto de escucha
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`); //se imprime el número de puerto de escucha
});
