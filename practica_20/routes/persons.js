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

router.get('/person', function(req, res) { //ruta con la vista para tomar los valores de la persona
    res.render('person');
});

router.post('/addPerson', function(req, res) { //nueva ruta POST para agregar datos a la base
    const myPerson = new Person({ //crea la entidad person con sus atributos
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss,
    });
    myPerson.save(); //guarda la entidad en la base de datos
});

module.exports = router;
