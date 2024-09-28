// Funciones puras: Son aquellas que siempre retornan el mismo valor si se les pasa los mismos argumentos

// Side Effects (Efectos secundarios): Es cualquier cosa que la función haga que no sea retornar un valor
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o en consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual 

function sum (a, b) {
    return a + b;
}

// Función impura

function sum (a, b) {
    console.log('A: ', a);
    return a + b;
}

let total = 0;

function sumWithSideEffect (a) {
    // total = total + a;
    total += a;
    return total;
}

// Función pura
function square (a) {
    return a * a;
}

function addTen (y) {
    return y + 10;
}

const number = 5;
const finalRessult = addTen(square(number))
console.log(finalRessult)