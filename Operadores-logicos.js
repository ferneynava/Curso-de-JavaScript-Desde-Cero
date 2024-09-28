// Operadores logicos // && (and), || (or), ! (not). Sirven para combinar valores booleanos y devolver un resultado booleano.

&& // and  // Devuelve true si ambos operandos son true. Si alguno de los dos es false, devuelve false.
|| // or   // Devuelve true si alguno de los operandos es true. Si ambos son false, devuelve false.
! // not  // Devuelve true si el operando es false. Si es true, devuelve false. Ejemplo !true = false, !false = true. 

const a = 10;
const b = 20;
const c = "10";


a == b && a == c; // false

a != b || a === c; // true

!(a === b); // true