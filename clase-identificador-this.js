// this es un identificador que hace referencia al objeto que está siendo ejecutado en ese momento.
// Enlace inplicito (Implicit binding) de this
const house = {
    dogName: 'Fido',
    dogGreeting: function (){
        console.log(`Woof! My name is ${this.dogName}`);
    }
}

house.dogGreeting(); // Woof! My name is Fido

// Enlace explicito (Explicit binding) de this

// Meotodo call() de this que permite cambiar el contexto de this en una función en tiempo de ejecución 
// Call recibe como primer argumento el objeto que será el nuevo contexto de this y los argumentos que recibe la función
// Call no recibe un array de argumentos, recibe los argumentos separados por coma 
// Call hace que la función sea ejecutada inmediatamente

function dogGreeting() {
    console.log(`Woof! My name is ${this.dogName}`);
}

const newHouse = {
    dogName: 'Coconut'
}

dogGreeting.call(newHouse)


function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Lucy'
const address = '123 Main St'
newDogGreeting.call (newHouse, owner, address)