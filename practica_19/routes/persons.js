const express = require('express'); //inyectamos express
const router = express.Router(); //se instancia un nuevo Router de express
const mongoose = require('../node_modules/mongoose'); //inyectamos moongose

let Person = require('../models/person'); //inyectamos modelo Person que creamos anteriormente

router.get('/persons', function(req, res, next) { //se agrega la ruta Person con el método GET
    Person.find(function(err, person){ //se crea método para encontrar a la persona o regresar un error
        if(err) () => next(err);
        res.json(person);
    });
});

module.exports = router;
