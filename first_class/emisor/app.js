import Emitter from "./emitter.js";

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Alguien dijo hola desde algún lado');
});

emtr.on('greet', () => {
    console.log('Acaba de suceder un saludazo');
});

console.log('Hola!');
emtr.emit('greet'); //se ejecutan ambas funciones ya que ambas se llaman con 'greet'

emtr.on('jump', () => {
    console.log('Alguien brincó!!');
});

console.log(emtr); //el emisor de eventos ahora cuenta con 2 keys con funciones anónimas diferentes
emtr.emit('jump'); //se llama a la función por su key 'jump' y se imprime el mensaje