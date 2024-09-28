// filter y reduce
// Filter () es un método que crea un nuevo array con todos los elementos que cumplan con la condición implementada por la función dada.Crea un nuevo array con elementos que cumplen una condición dada por una funcion. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(numbers);
console.log(evenNumbers);

// Reduce () caso1 es un método que aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor. Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor.

const numberReduce = [1, 2, 3, 4, 5];
const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numberReduce);
console.log(sum);

// Reduce () caso2

const words = ['the', 'quick', 'brown', 'fox',  'quick', 'fox'];
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator
}   , {});
console.log(words);
console.log(wordFrecuency);

// Exercise: Passing Grade Average

const green = [85, 92, 60, 78, 89, 95, 50, 87, 43, 45, 89, 67];
const passingGrade = green.filter((grade) => grade >= 70);
const averagePassingGarde = passingGrade.reduce((sum, grade) => sum + grade, 0) / passingGrade.length;
console.log(green);
console.log(passingGrade);
console.log(averagePassingGarde);

