let express = require('express'); //inyección de express
let router = express.Router(); //instanciación del router para las vistas

router.get('/person', (req, res) => {
    res.send('Haz solicitado el listado de personas'); //respuesta que obtendrá postman al hacer una petición http con el método get
});

module.exports = router; //exportamos el archivo como módulo para utilizarlo en server
