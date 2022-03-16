import greet from './greet1.js';
//import {greet as greet2} from './greet2.js'; //es6 syntax
import * as greet2a from './greet2.js';

greet(); //se llama a la función greet del módulo greet1
//greet2(); //se llama a la función greet del módulo greet2 como propiedad
greet2a.greet(); //se llama a la propiedad greet del módulo greet2

import * as greet3 from './greet3.js'; //importa la función constructora

console.log(greet3); //imprime el contenido del constructor

greet3.greet(); //llama a la función del modulo greet3
greet3.greeting = "Hola desde app"; //se cambia el valor de greeting 

import * as greet3b from './greet3.js'; //se importa el modulo greeting3 otra vez con otro nombre
greet3b.greet(); //se llama a la función greet

import * as Greet4 from './greet4.js';

let myGreet = new (Greet4);
myGreet.greet(); //se crea una instancia de Greet4 y se llama a la función greet

import * as greet5 from './greet5.js';

greet5.greet5(); //se invoca el método greet del módulo 5 mediante module revealing pattern