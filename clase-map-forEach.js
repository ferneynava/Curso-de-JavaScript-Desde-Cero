// Map () es un método que crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// Permite aplicar una función a cada uno de los elementos de un array y construir un nuevo array con los resultados.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNumbers = numbers.map((number) => number * number);
console.log(numbers);
console.log(squareNumbers);

// forEach () Itera sobre cada elemento de un array y ejecuta una funcion proporcionada por cada elemento, sin crear un nuevo array. 

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];
const iteratedColors  =  colors.forEach((color) => console.log(color));
console.log(colors);
console.log(iteratedColors);

// Exercise: Fahrenheit to Celsius
// Convert the following fahrenheit values to celsius using the map method.
const temperaturesFahrenheit = [32, 68, 95, 104, 212];	
const temperaturesCelsius = temperaturesFahrenheit.map((fahrenheit) => (5/9) * fahrenheit - 32);
console.log(temperaturesCelsius);

// Exercise: sum of all numbers in an array 
const newNumbers = [1, 2, 3, 4, 5];
let suma = 0;

newNumbers.forEach((number) => suma = suma + number);
console.log(suma);

