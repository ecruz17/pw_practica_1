function Greetr() {
    this.greeting = "Hola desde la función constructora greet4";
    this.greet = function () {
        console.log(this.greeting);
    }
}

export {Greetr};