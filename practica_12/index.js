var express = require('express');
var app = express(); 

var port = process.env.PORT || 3000; 

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); //se setea el view engine de la app como EJS

app.use('/', function(req, res, next) {
    console.log(`Request Url: ${req.url}`);
    next();
});

app.get('/', function(req, res) {
    res.render('index'); //cambiamos el método send por render, ya que ahora utilizamos un view engine
});

app.get('/api', function(req, res){
    res.json({ firstname: 'Emir', lastname: 'Cruz' });
});


app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id }); //se cambia el método send por render y se le pasan los parametros necesarios
}); 

app.listen(port);
