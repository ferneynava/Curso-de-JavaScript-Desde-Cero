// Creación de string 
const primeraOpcion = 'Comillas simples'; 
const segundaOpcion = "Comillas dobles";
const terceraOpcion = `Comillas simples`; // String literal hace referencia a que es un string que se escribe tal cual como se va a imprimir

// 1. Concatenación: opción +
const direccion = 'calle falsa 123';
const ciudad = 'Springfield';
const direccionCompleta = 'Mi dirección completa es: ' + direccion + ciudad;
console.log(direccionCompleta);

const direccionCompletaConEspacio = 'Mi dirección completa es: ' + direccion + ' ' + ciudad;
console.log(direccionCompletaConEspacio);

// 2. Concatenación: Template literals
const nombre = 'Ferney';
const pais =  '🇨🇴'

const presentación = `Hola, soy ${nombre} de ${pais}`;
console.log(presentación);

// 3. Concatenación: join()
const primeraParte = 'Me encanta';
const segundaParte = 'la gente de';
const terceraParte = 'Mexico';
const pensamiento =  [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' ')); //join() vamos a juntar los string pero entre ellos vamos a poner un espacio o puede ser un guión, un punto o un emoji. 
console.log(pensamiento.join('🤠'));

// 4. Concatenación: concat()   
const hobbie1 = '⚽';
const hobbie2 = '📙';
const hobbie3 = '💻';
const hobbies = 'Mis hobbies son: ' .concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '. ');
console.log(hobbies);

// Caracteres de escape 
// const whatDoIDo = 'I'm Software Engineer';

// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer";

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m Software Engineer';

// 3. Template literals
const escapeComillasInvertidas = `I'm Software Engineer`;

// Escritura de Strings largos
/*
    Las rosas son rojas, 
    Las violetas son azules,
    Caracter inesperado
    En la linea 86
*/

const poema = 'Las rosas son rojas,\n' + 
              'Las rosas son azules,\n' + 
              'Caracter inesperado\n' +
              'En la linea 86.';
console.log(poema);

const poema2 = 'Las rosas son rojas,\n\
Las rosas son azules,\n\
Caracter inesperado\n\
En la linea 86.';
console.log(poema2);

// \n: salto de linea

const poema3 = `Las rosas son rojas,
Las rosas son azules,
Caracter inesperado
En la linea 86.`

console.log(poema3);
