// Methods that modify the original array (Mutability)

// splice - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos en su lugar y retorna los elementos eliminados.

const vegetables = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', 'carrot'];
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion');
console.log(vegetables); // [ 'broccoli', 'cauliflower', 'cucumber', 'onion', 'kale', 'tomato', 'carrot' ]
console.log(removedVegetables);

// reverse - Invierte el orden de los elementos de un array y retorna el array invertido. El primer elemento pasa a ser el último y el último el primero.
// reverse()

const numbers = [1, 2, 3, 4, 5];
const reversedNumbres = numbers.reverse();
console.log(numbers);
console.log(reversedNumbres);

// sort - Ordena los elementos de un array localmente y retorna el array ordenado. El orden por defecto es de acuerdo al valor de las cadenas de texto Unicode.
// sort number

const unsortedNumbers = [4, 18, 1 , 62, 34];
const unicodeSortedNumbers = unsortedNumbers.sort();
console.log(unsortedNumbers); // [ 1, 18, 34, 4, 62 ]
console.log(unicodeSortedNumbers); // [ 1, 18, 34, 4, 62 ]

const unsortedNumbers2 = [4, 18, 1 , 62, 34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b);
//  4 - 18 = -14 
// 18 - 1 = 17 

console.log(unsortedNumbers2);
console.log(sortedNumbers);

// sort string UTF-16
const cities = ['New York', 'Boston', 'Los Angeles', 'Chicago', 'Miami'];
const sortedCities = cities.sort();

console.log(cities);
console.log(sortedCities);

// fill - Cambia todos los elementos de un array por un valor estático desde un índice inicial (por defecto 0) hasta un índice final (por defecto array.length) (excluyente) y retorna el array modificado.

// cuales son los valores estaticos: String, Number, Boolean, Object, Array, Function, Symbol, undefined, null

const ages = [12, 15, 18, 20, 25, 30];
console.log(ages.fill(0, 2, 4)); // [ 12, 15, 0, 0, 25, 30 ]
console.log(ages.fill(15, 1)); // [ 12, 15, 15, 15, 15, 15 ]
console.log(ages.fill(10)); // [ 10, 10, 10, 10, 10, 10 ]
