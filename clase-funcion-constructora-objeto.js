// const persona = {
//     nombre: "Ferney",
//     Apedillo: "Nava",
// }

function Persona (nombre, apellido, edad) {
    this.nombre = nombre; // this hace referencia al objeto que se esta creando
    this.apellido = apellido; // this hace referencia al objeto que se esta creando
    this.edad = edad; // this hace referencia al objeto que se esta creando
}

const persona1 = new Persona('Ferney', 'Nava', 30); // new crea un nuevo objeto
console.log(persona1);

const persona2 = new Persona('Juan', 'Perez', 25); // new crea un nuevo objeto
console.log(persona2);

Persona.prototype.telefono = "1234567890"; // prototype agrega una propiedad al objeto Persona.Que es prototype: es un objeto que tiene todas las propiedades y metodos que tiene un objeto
console.log(persona1);

persona1.nacionalidad = "Mexicana";
console.log(persona1);
console.log(persona2);

Persona.prototype.saludo = function () {
    console.log(`Hola, mi nombres es ${this.nombre} y tengo ${this.edad} años`);
}
console.log(persona1.saludo());
console.log(persona2.saludo());

function carros (marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

const carro1 = new carros('Ford', 'Fiesta', 2010);
console.log(carro1);
const carro2 = new carros('Chevrolet', 'Aveo', 2015);
console.log(carro2);
const carro3 = new carros('Nissan', 'March', 2018);
console.log(carro3);

carros.prototype.comprar = function () {
    console.log(`Compre un ${this.marca} ${this.modelo} ${this.anio}`);
}
console.log(carro1.comprar());

carro1.color = "Rojo";
console.log(carro1);