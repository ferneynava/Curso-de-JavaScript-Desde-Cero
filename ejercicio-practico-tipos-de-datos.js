// Social Media Profile

// 1. User information
const username = 'codingAdventurer';
const fullName = 'Ana Maria';
const age = 25;
const isStudent = true;

// 2. Address
const address = {
    street: '123 Main St',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321
}

// 3. Hobbies

const hobbies = ['coding', 'music', 'movies', 'gaming'];

// 4. Generating personalized bio

const personalizedBio = `Hi, I,m ${fullName}. 
I'm ${age} years old.
I live in ${address.city}. 
I love ${hobbies.join(', ')}. 
Follo me for coding adventures!`;

// 5. Print the user profile and bio

console.log(personalizedBio);

//join() Es unir los elementos de un array en un string, separados por el separador que le indiquemos.