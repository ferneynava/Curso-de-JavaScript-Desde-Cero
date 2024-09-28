/* 
this ---  class
this --- objeto -- class 
this es una palabra clave especial que se refiere al objeto que está "en uso" en el momento actual.
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona = new Persona('Juan', 25);
console.log(persona); // Persona { nombre: 'Juan', edad: 25 }
persona.nuevoMetodo = function() {
    console.log(`Mi nombre es ${this.nombre}`);
}
console.log(persona.nuevoMetodo()); // Mi nombre es Jua