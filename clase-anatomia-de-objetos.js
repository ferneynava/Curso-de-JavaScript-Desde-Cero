/* 

Estructura de datos 

key / value

objeto {
    propiedad: valor, 
    propiedad: valor,
    propiedad: valor,
    Metodos: funcion () {}
}
*/

const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Av. Independencia',
        numero: 123,
        ciudad: "CDMX"
    },
    saludo () {
        console.log(`Hola, mi nombres es ${persona.nombre} y tengo ${persona.edad} años`);
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona.direccion.ciudad);
console.log(persona.saludo());
persona.telefono = 1234567890;
console.log(persona);
console.log(persona.telefono);

persona.despedir = function () {
    console.log(`Adios, mi nombres es ${persona.nombre} y tengo ${persona.edad} años`);
}
console.log(persona.despedir());
delete persona.telefono;
console.log(persona);
delete persona.despedir;
console.log(persona);