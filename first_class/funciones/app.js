import chalk from 'chalk';

let greet = () => console.log('Hola!');
greet(); //invoca función

let logGreeting = parameter => parameter();

logGreeting(function () {
    console.log('Hola desde: function created on the fly');
});

//logGreeting(greet); //pasando función como parametro en logGreeting

let greetMe = () => console.log('Hola de la función como expresión');

greetMe();

logGreeting(greetMe); //funciones como primera clase, se pasan como parámetros

let logGreeting1 = (nombre, color) => {
    console.log(`Hola ${nombre}, tu color favorito es el ${chalk.green(color)}`);
}

logGreeting1('Emir', 'verde');
