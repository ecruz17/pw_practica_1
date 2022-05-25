const mongoose = require('mongoose');

let PersonSchema = mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String,
});

module.exports = mongoose.model('Persons', PersonSchema);