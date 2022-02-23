let greet = () => console.log('Hola!');
greet(); //invoca función

let logGreeting = fn => fn();

logGreeting(greet); //pasando función como parametro en logGreeting

let greetMe = () => console.log('Hola de la función como expresión');

greetMe();

logGreeting(greetMe); //funciones como primera clase, se pasan como parámetros
