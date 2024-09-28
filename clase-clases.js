// Ques clases en JavaScript: son una plantilla para crear objetos, son como un molde para crear objetos. Una clase es un modelo que define un conjunto de atributos y métodos que tendrán los objetos que se creen a partir de ella.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
    } 
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Juan', 30);
persona1.saludar();


