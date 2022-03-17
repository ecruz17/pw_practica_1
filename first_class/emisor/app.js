// var Emitter = require('./emitter.js');
var Emitter = require('events'); //se cambió el módulo emisor creado por nosotros por el módulo events propio de node
var emtr = new Emitter();
var config = require('./config.js');

// emtr.on('greet', () => {
//     console.log('Alguien dijo hola desde algún lado');
// }); versión vieja

emtr.on(config.events.GREET, () => {
    console.log('Alguien dijo hola desde algún lado'); 
}); //la función modificada para llamar a greet desde el archivo config y evitar errores de typo

emtr.on(config.events.GREET, () => {
    console.log('Acaba de suceder un saludazo');
});

console.log('Hola!');
emtr.emit('greet'); //se ejecutan ambas funciones ya que ambas se llaman con 'greet'

emtr.on(config.events.JUMP, () => {
    console.log('Alguien brincó!!');
});

console.log(emtr); //el emisor de eventos ahora cuenta con 2 keys con funciones anónimas diferentes
emtr.emit('jump'); //se llama a la función por su key 'jump' y se imprime el mensaje