// String primitivos Inmutables

const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un string primitivo también');
console.log(typeof stringPrimitivoTambien);

// String objetos Mutables 

const stringObjeto = new String('Soy un string objeto'); //Creando un objeto 
console.log(typeof stringObjeto);

// Acceder a caracteres 

const saludo = 'Hola. ¿Cómo estás?';

console.log(saludo[2]);
console.log(saludo.charAt(2)); //charAt nos permite acceder a un caracter en especifico
console.log(saludo.indexOf('o')); //indexOf nos permite saber en que posicion se encuentra un caracter
console.log(saludo.indexOf('como'));
console.log(saludo.lastIndexOf('o')); //lastIndexOf busca la ultima letra que le pasamos por parametro
console.log(saludo.slice(3, 5)); //slice nos permite cortar un string, el primer parametro es el inicio y el segundo el final.
console.log(saludo.length); //length nos permite saber la longitud de un string
console.log(saludo.toLocaleUpperCase()); // toLocaleUpperCase nos permite convertir un string a mayusculas
console.log(saludo.toLocaleLowerCase()); // toLocaleLowerCase nos permite convertir un string a minusculas
console.log(saludo.startsWith('H')); //startsWith nos permite saber si un string empieza con un caracter en especifico
console.log(saludo.endsWith('?')); //endsWith nos permite saber si un string termina con un caracter en especifico

const saludoDividido = saludo.split(' '); //split nos permite dividir un string en un array, el parametro es el separador
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoConEspacios = ' Hola Mundo ';
const saludoSinEspacios = saludoConEspacios.trim(); //trim nos permite eliminar los espacios en blanco al inicio y al final de un string
console.log(saludoSinEspacios);

const saludoOriginal = 'Hola Mundo';
const nuevosaludo = saludoOriginal.replace('Mundo', 'a todos'); //replace nos permite reemplazar un string por otro
console.log(nuevosaludo);

