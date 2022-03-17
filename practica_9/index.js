const express = require('express');
const app = express();

app.get('/', (req, res) =>{ //manejador de ruta
    res.send("Hola, esta es la ruta raíz");
});

app.get('/prueba', (req, res) =>{ //manejador de ruta
    res.send('<h1>Prueba de servidor con Express</h1>'); //regresa HTML
}); //se accede cambiando el link a http://localhost:3000/prueba

app.listen(3000);
app.get('/uno', (req, res) => { //otro manejador de ruta
    res.send("Hola desde la ruta uno");
}); //se accede cambiando el link a http://localhost:3000/uno