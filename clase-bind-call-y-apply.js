// Método call: permite cambiar el contexto de this en una función en tiempo de ejecución. Call recibe como primer argumento el objeto que será el nuevo contexto de this y los argumentos que recibe la función. Call no recibe un array de argumentos, recibe los argumentos separados por coma. Call hace que la función sea ejecutada inmediatamente.

const owner = 'Luci'
const address = '123 Avenue'

function dogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const newHouse = {
    dogName: 'Coconut'
}

dogGreeting.call(newHouse, owner, address)

// newHouse: objeto que será el nuevo contexto de this en la función dogGreeting 
// owner, address: argumentos que recibe la función dogGreeting
// address: argumento que recibe la función dogGreeting 

// Método apply: permite cambiar el contexto de this en una función en tiempo de ejecución. Apply recibe como primer argumento el objeto que será el nuevo contexto de this y un array de argumentos que recibe la función. Apply hace que la función sea ejecutada inmediatamente.

const necessaryValues = [owner, address]

dogGreeting.apply(newHouse, necessaryValues)

// newHouse: objeto que será el nuevo contexto de this en la función dogGreeting
// necessaryValues: array de argumentos que recibe la función dogGreeting 

// Método bind: permite cambiar el contexto de this en una función en tiempo de ejecución. Bind recibe como primer argumento el objeto que será el nuevo contexto de this y los argumentos que recibe la función. Bind no hace que la función sea ejecutada inmediatamente, retorna una nueva función con el nuevo contexto de this.

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind()

// newHouse: objeto que será el nuevo contexto de this en la función dogGreeting
// owner, address: argumentos que recibe la función dogGreeting
// bindingWithBind: nueva función con el nuevo contexto de this

// En resumen, call y apply cambian el contexto de this en una función y la ejecutan inmediatamente, mientras que bind cambia el contexto de this en una función y retorna una nueva función con el nuevo contexto de this.

// Quiz
const caritura = {nombre: 'vaca y pollito'}

function recuerdo(personaje){
    console.log(`${this.nombre} era mi caricatura favorita. Me encantaba ver las aventuras de ${personaje}`)
}

recuerdo.call(caritura, 'vaca')
recuerdo.bind(caritura, 'vaca')

// Cual será el resultado de la ejecución de este código?
// call: El resultado será: vaca y pollito era mi caricatura favorita. Me encantaba ver las aventuras de vaca 
// bind: El resultado será: [Function: bound recuerdo]
