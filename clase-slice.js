// slice() Crea una copia superficial (shallow copy) de una porción de un array a partir de un inicio y fin dados (fin no incluido). Devuelve una copia de los elementos seleccionados en un nuevo array.

const animales = ['perro', 'gato', 'loro', 'pez', 'conejo', 'tortuga', 'iguana', 'serpiente', 'hamster', 'cerdo', 'gallina', 'pato', 'ganso', 'caballo', 'vaca', 'oveja', 'cerdo', 'burro', 'mono', 'elefante', 'jirafa', 'hipopotamo', 'rinoceronte', 'cocodrilo', 'tigre', 'leon', 'oso', 'lobo', 'zorro', 'mapache', 'ardilla', 'nutria', 'castor', 'ciervo', 'alce', 'oso hormiguero', 'oso panda', 'koala']

console.log(animales.slice(2)) // desde el índice 2 hasta el final del array 
console.log(animales.slice(2, 9)) // desde el índice 2 hasta el índice 9
console.log(animales.slice(1, 24)) // desde el índice 1 hasta el índice 24
console.log(animales.slice(-2)) // desde el penúltimo elemento hasta el final del array
console.log(animales.slice(5, -2)) // desde el índice 5 hasta el penúltimo elemento
console.log(animales.slice()) // copia el array completo