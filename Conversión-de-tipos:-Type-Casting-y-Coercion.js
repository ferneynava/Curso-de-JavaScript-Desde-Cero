// Lenguajes de programación

//Compilados vs Interpretados

//Compilados: C, C++, Rust, Go, Kotlin, Swift, etc.
//Interpretados: JavaScript, Python, Ruby, PHP, etc.
// Que es compilado? 
// Es un lenguaje de programación que se compila antes de ser ejecutado.
// Que es interpretado?
// Es un lenguaje de programación que se interpreta en tiempo real.
// Compilados = Chequeo estático de tipos
// Interpretados = Chequeo dinámico de tipos

//Conversión
//Implicita: Cuando el lenguaje cambia el tipo de dato de una variable por nosotros. 2 + true = 3
//Explicita: Cuando nosotros cambiamos el tipo de dato de una variable. String(), Number(), Boolean(), etc.

//Explicita - Type Casting

const string = '42';
const integer = parseInt(string); //parseInt() convierte un string a un entero
console.log(integer);
console.log(typeof integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal); //parseFloat() convierte un string a un decimal
console.log(float);
console.log(typeof float);

const binary = '1010'
const decimal = parseInt(binary, 2); //parseInt() convierte un string a un entero, el segundo parámetro es la base del número Binario a decimal
console.log(decimal);
console.log(typeof decimal); 

// Implicita - Type Coercion

const sum = '5' + 3;
console.log(sum);

const sumWithBoolean = '3'+ true;
console.log(sumWithBoolean);

const sumWithNumber = 2 + true;
console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
console.log('-----------------');
console.log(stringValue + stringValue); //CONCATENA 
console.log(stringValue + numberValue); //CONCATENA
console.log(stringValue + booleanValue); //CONCATENA
console.log(numberValue + stringValue); //CONCATENA
console.log(numberValue + numberValue); //SUMA
console.log(numberValue + booleanValue); //SUMA
console.log(booleanValue + stringValue); //CONCATENA
console.log(booleanValue + numberValue); //SUMA
console.log(booleanValue + booleanValue); //SUMA

// Cuando hay un string concatena y cuando es sin string suma


// Quiz 
const numero = '596';
const numeroConvertido = parseInt(numero); 

console.log(numero);
console.log(typeof numeroConvertido);

// A) STRING Y NUMBER
// B) STRING Y STRING
// C) NUMBER Y STRING

// Respuesta A 