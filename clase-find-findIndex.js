// find() y findIndex()

// Find () es un método que devuelve el primer elemento que cumple con la condición dada. Si no encuentra ningún elemento, devuelve undefined. Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const multiplesf5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const firstNumberGreaterThan10 = multiplesf5.find((number) => number > 10)
console.log(multiplesf5);
console.log(firstNumberGreaterThan10);

// FindIndex () es un método que devuelve el índice del primer elemento que cumple con la condición dada. Si no encuentra ningún elemento, devuelve -1. Devuelve el índice del primer elemento en un array que satisface una condición proporcionada en forma de función. Si no encuentra ningún elemento que cumpla la condición, devuelve -1. 

const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const indexNumber = randomNumbers.findIndex((number) => number > 5);

console.log(randomNumbers);
console.log(indexNumber);

// Exercise: Raffle Winner Verification Program

const winningParticipants = [
    {id:1, name: 'John', ticketNumber: 12345},
    {id:2, name: 'Jane', ticketNumber: 67890},
    {id:3, name: 'Bob', ticketNumber: 55555},
    {id:4, name: 'Bill', ticketNumber: 77777},
    {id:5, name: 'Sally', ticketNumber: 66666},
    {id:6, name: 'Maggie', ticketNumber: 88888}
];

function findWinnerByName(name){
    const winner = winningParticipants.find((participant) => participant.name === name);
    return winner || 'No winner found with that name.'
}

function findWinnerByIndexNumber(ticketNumber){
    const index = winningParticipants.findIndex((participant) => participant.ticketNumber === ticketNumber);
    return index !== -1 ? index : 'No winner found with that ticket number.'
}

function displayWinnerInformation (winner){
    if (winner !== undefined &&  winner !== null && winner !== 'No winner found with that name.' ){
        console.log('Winner information: ', winner)
    } else {
        console.log('No winner found.')
    }
}

const winnerByName =  findWinnerByName('Bob');
const indexWinnerByTicket = findWinnerByIndexNumber(55555)
displayWinnerInformation(winnerByName);
console.log('Index of winner by Ticket Number: ', indexWinnerByTicket);
