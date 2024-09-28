// concat () Une dos o más arrays, y devuelve una copia de los arrays unidos. 
const morseCode1 = ['.-', '-...', '-.-.', '-..', '.','..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
const morseCode2 = ['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];

// Combine with concat() Forma 1
const morseCodeMessage = morseCode1.concat(morseCode2);
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combine with concat() Forma 2 Para más de dos arrays 
const morseCodeMessage2 = [].concat(morseCode1, morseCode2);
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Spread Operator Spread Operator

function combineMorseMessages (morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1, morseCode2);

const numbers = [1, 2, 3, 4, 5];
const string = 'String';

const unionArray = combineMorseMessages(numbers, string)

// Join () Une todos los elementos de un array en un string y devuelve este string. Concatena los elementos del array separados por un separador especificado. Si no se especifica un separador, los elementos del array se separan con una coma.

const morseCodeMessageString = morseCode2.join(' e ')
console.log(morseCodeMessageString)
