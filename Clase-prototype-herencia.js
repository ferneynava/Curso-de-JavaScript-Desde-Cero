// prototipo: es un mecanismo que permite compartir atributos y métodos entre objetos de una misma clase.
// herencia: es un mecanismo que permite que una clase herede los atributos y métodos de otra clase. La clase que hereda se llama subclase y la clase de la que hereda se llama superclase.

/*
clases
funciones constructoras
*/

class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonidos(){
        console.log(`El animal emite un sonido de tipo ${this.tipo}`);
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza){
        super(nombre, tipo);
        this.raza = raza;
    }

    emitirSonido(){
        console.log('Guau guau');
        console.log(`${this.emitirSonidos()}`);
    }

    correr(){
        console.log(`${this.nombre} corre muy rápido`);
    }  
}

const perro1 = new Perro('Toby', 'Perro', 'Pastor Alemán');
console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function(){
    console.log('Este es un nuevo método');
}
console.log(perro1);
console.log(perro1.nuevoMetodo());

Perro.prototype.segundoMetodo = function (){
    console.log('Este es un segundo método');
}

console.log(Perro.prototype);
console.log(perro1.segundoMetodo());