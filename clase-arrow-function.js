//Arrow function: Son una forma más corta de escribir funciones anónimas.

const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParams = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Bed',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },

    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')
