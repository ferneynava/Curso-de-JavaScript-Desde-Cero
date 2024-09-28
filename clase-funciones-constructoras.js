// Funcion constructora: es una funcion que se utiliza para crear objetos de un mismo tipo
function Rocket (name, ownMessage) {
    this.name = name
    this.launch = function () {
        console.log(ownMessage)
    }
}

const rocket1 = new Rocket('Falcon 1', 'Goodbye everybody!') // Instancia: es un objeto creado a partir de una funcion constructora
const rocket2 = new Rocket('Falcon 9', 'See you soon!')
console.log(rocket1.name)
console.log(rocket2.launch())

// Function constructora con arrow function

function Rocket (name, ownMessage) {
    this.name = name
    this.launch = () => console.log(ownMessage)
}

const rocket3 = new Rocket('Falcon 1', 'Goodbye everybody!') // Instancia: es un objeto creado a partir de una funcion constructora
const rocket4 = new Rocket('Falcon 9', 'See you soon!')
console.log(rocket3.name)
console.log(rocket4.launch())

// Function constructora con arrow function y funcion personalizada

const personalizedMessage = () => 'Goodbye everybody!'

function Rocket (name, ownMessage) {
    this.name = name
    this.launch = ownMessage
}

const rocket5 = new Rocket('Falcon 1', personalizedMessage()) // Instancia: es un objeto creado a partir de una funcion constructora

// Function constructora con arrow function y funcion personalizada sin new

const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: () => ownMessage
})

const personalizedMessageForArrowFunction = () => 'Successfull launch!'

const rocket6 = RocketWithArrowFunction('Falcon 1', personalizedMessageForArrowFunction()) // Instancia: es un objeto creado a partir de una funcion constructora

console.group(rocket6.name)
console.group(rocket6.launchMessage())

