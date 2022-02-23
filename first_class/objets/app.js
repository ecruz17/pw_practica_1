let persona = {
    nombre: "Emir",
    apellido: "Cruz",
    getName: function() {
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: "Guillermo Prieto #140",
        colonia: "Sur",
        cp: 2800,
        municipio: "Colima",
    },
    getAddress: function() {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp} ${this.domicilio.municipio}`;
    },
};

console.log(persona.nombre);
console.log(persona.apellido);

console.log(persona.getName());

console.log(persona.domicilio);

console.log(persona.getAddress());