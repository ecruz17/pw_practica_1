const express = require('express'); //inyectamos express
const router = express.Router(); //se instancia un nuevo Router de express
const mongoose = require('../node_modules/mongoose'); //inyectamos moongose

let Person = require('../models/person'); //inyectamos modelo Person que creamos anteriormente

router.get('/persons', function(req, res, next) { //se agrega la ruta Person con el método GET
    Person.find(function(err, person){ //se crea método para encontrar a la persona o regresar un error
        if(err) return next(err);
        //res.json(person);
        res.render('personsIndex', {person}); //se renderiza la vista con el index de la persona
    });
});

router.get('/person', function(req, res) { //ruta con la vista para tomar los valores de la persona
    res.render('person');
});

router.get('/main', function(req, res) { //ruta con la vista main
    res.render('main');
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
 /* METODO PARA ELIMINAR UNA PERSONA DE LA COLECCIÓN */
router.get('/deletePerson/:id', function(req, res, next) { //se toma el id del objeto
    Person.findByIdAndRemove(req.params.id, req.body, function(err, post) { //con el metodo findByIdAndRemove se elimina la persona dado un id
        if(err) return next(err);
        res.redirect('/persons'); //se redirige a la vista de persons una vez eliminada la persona
    });
});

router.get('/findById/:id', function(req, res, next) { //metodo para encontar una persona mediante id
    Person.findById(req.params.id, function(err, person) {
        if(err) return next(err);                   //si la peticion regresa error si este ocurre
        res.render('personUpdate', {person});   //si la petición es exitosa se renderiza la vista
    });
});

router.get('/updatePerson', function(req, res, next) {  
    Person.findByIdAndUpdate(req.body.personId, { //metodo que busca una persona por id y la actualiza con los nuevos valores ingresados
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre, //JSON con los valores ingresados
        nss: req.body.nss}, function(err, post) { //funcion que regresa una promesa con un error o redirecciona a la vista persons
            if(err) return next(err);
            res.redirect('/persons'); //se redirige al listado en caso de que la acción resultó exitosa
        });
});

module.exports = router;
