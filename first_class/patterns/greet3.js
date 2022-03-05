function Greetr() {
    this.greeting = "Hola desde la función constructora";
    this.greet = function () {
        console.log(this.greeting);
    }
}

export default new Greetr;