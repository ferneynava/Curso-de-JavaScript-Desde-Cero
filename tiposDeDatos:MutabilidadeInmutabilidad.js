//10 tipos de datos 
// Primitivos Inmutables Se pasan por valor
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// Complejos Mutables Se pasan por referencia
// 1. Object
// 2. Function
// 3. Array

// Mutabilidad: La mutabilidad es la capacidad de cambiar el valor de un dato.Cambiando el valor original. 
// Inmutabilidad: La inmutabilidad es la incapacidad de cambiar el valor de un dato. No cambia el valor original.


// Tipo de dato primitivo - Inmutable
let numero = 10;
numero = numero + 10;
console.log(numero);

let esVerdad = true;
esVerdad = false;
console.log(esVerdad);

// Tipo de dato complejo - Mutable

let usuario = {nombre : 'Pepito',
               edad : 25};
usuario.edad = 30;
console.log(usuario);

let frutas = ['Manzana', 'Pera', 'Piña'];	
frutas[0] = 'Sandia'
console.log(frutas);

function cambiarNombre (objeto){
    objeto.nombre = 'Nuevo nombre';
}

let persona = {nombre : 'Pedro'};
cambiarNombre(persona);
console.log(persona);