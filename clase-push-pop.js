// Metodos que modifican el array original (mutabilidad)
// push() - Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
const countris = ['🇨🇴', '🇲🇽', '🇺🇸', '🇨🇱', '🇦🇷'];
const newCountries = countris.push('🇧🇷', 'Australia')
console.log(countris);
console.log(newCountries);
// pop() - Elimina el último elemento de un array y lo devuelve.

const removedCountry = countris.pop();
console.log(countris);
console.log(removedCountry);