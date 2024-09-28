// Capacidades que tienen las funciones al igual que otros objetos 

// 1. Pasar funciones como argumentos -> callback 
// Que es un callback? 
// Es una funcion que se pasa como argumento

function a (){}

function b (a){}

b(a);

// 2. Retornar funciones 

function a (){
    function b (){}
    return b;
}

// Asignar funciones a variables -> Expresión de función

const a = function () {};

// Tener propiedades y métodos

function a (){}
const obj = {}
a.call(obj);

// Anidar funciones -> Nestred functions

function a (){
    function b (){
        function c() {

        }
        c()
    }
    b()
}
a()

// ¿Es posible almacenar funciones en objetos? Si es posible, se llaman métodos

const rocket= {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('Liftoff!')
    }
}

rocket.launchMessage();