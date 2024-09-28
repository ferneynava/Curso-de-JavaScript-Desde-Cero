// Every() Determina si todos los elementos en el array satisfacen una condición.  Devuelve true si todos los elementos del array satisfacen la condición, de lo contrario, devuelve false.

const ages = [21, 25, 30, 19, 22]

// every()
const allAreAdults = ages.every(age => age >= 20)
console.log(ages)
console.log(allAreAdults)

// Some() Determina si al menos uno de los elementos en el array satisface una condición. Devuelve true si al menos un elemento del array satisface la condición, de lo contrario, devuelve false.

// some ()

const atLeastOneIsOver30 = ages.some(age => age > 29)
console.log(ages)
console.log(atLeastOneIsOver30)