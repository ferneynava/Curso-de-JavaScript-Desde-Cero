// How to create an Array ?

// 1. new Array() o Array()

const fruits = Array('🍎', '🍌', '🍇');
console.log(fruits);

const justOneNumbers = Array(12);
console.log(justOneNumbers);

const Number = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(Number);

// 2. Array literal syntax

const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ['soccer', 'basketball', 'tennis'];
console.log(sports);

const recipeIngredients = ['🍅', '🧄', '🧅', '🧀', '🍞', true, 45, {ingredient: 'Milk', quntity: '1 cup'}, false];
console.log(recipeIngredients);

// Accessing array elements 

const firstFruit = fruits[0];
console.log(firstFruit);

// length property

const numberOfFruits = fruits.length;
console.log(numberOfFruits);

// Mutabilidad de los arrays: podemos modificar los elementos de un array en cualquier momento y podemos agregar o eliminar elementos.
// Modifica el array original
fruits.push('🍉');
console.log(fruits);

// Inmutabilidad de los arrays: no podemos cambiar el tamaño de un array una vez que se ha creado. Si necesitamos agregar o eliminar elementos, debemos crear un nuevo array.
// No modifica el array original crea un nuevo array

const newFruits = fruits.concat(['🍊', '🍊']);
console.log(fruits);
console.log(newFruits); 

// Checking arrays with Array.isArray()
const isArray = Array.isArray(fruits);
console.log(isArray);

// Practica ejercicio: Suma de todos los elementos de un Array 
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for(i = 0 ; i < numbersArray.length; i++){
   let valor = numbersArray[i];
    sum += valor; // sum = sum + valor 
}

console.log(sum);


