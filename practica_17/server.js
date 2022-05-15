const express = require('express'); //importamos express
let app = express(); //creamos la app

const mongoose = require('mongoose'); //importamos mongoose en el proyecto

mongoose.connect('mongodb+srv://dbAdmin:NdNffRYhiyAQHNsb@webprogrammingpractice.jhnha.mongodb.net/WebProgrammingPractice?retryWrites=true&w=majority', { //url de comexión con base de datos
    useNewUrlParser: true, //setting de parseo de url para usuario
    useUnifiedTopology: true //setting de conexión de topología indefinida
}).then(console.log(`Base de datos conectada`)) //si la conexión es exitosa, se imprime este mensaje
.catch(err => console.log(err)); //si la conexión falla, se imprime en consola el error

let PORT = process.env.PORT || 3000; //puerto de escucha
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`); //se imprime el número de puerto de escucha
});
