// Null se usa cuando una variable no tiene ningún valor asignado
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

// Undefined se usa cuando una variable no ha sido definida o no ha sido asignada
let name;
console.log(name);

// Symbol
// Los Symbols son valores únicos e inmutables, y se utilizan comúnmente como claves de propiedades de objetos para evitar colisiones de nombres.
// En este caso, symbol1 y symbol2 son diferentes a pesar de tener el mismo contenido, ya que cada Symbol es único.
const uniqueId = Symbol('id');
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

const ID = Symbol('id');
let user = {}
user[ID] = '12345';
console.log(user);

// BigInt se usa para números muy grandes
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

const numbreOfPaticlesInTheUniverse = 10000000000000000000000000000000000000000n;
console.log(numbreOfPaticlesInTheUniverse);