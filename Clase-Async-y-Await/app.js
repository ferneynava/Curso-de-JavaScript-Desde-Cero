/*
Async and await
*/

// Async y await son una forma de trabajar con promesas de una manera más sencilla y legible.

// function fetchData() {
//     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// }

async function fetchData() {
    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        let data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const urls = [
    "https://pokeapi.co/api/v2/pokemon/ditto",
    "https://pokeapi.co/api/v2/pokemon/charmander",
    "https://pokeapi.co/api/v2/pokemon/squirtle"
];

async function fetchNewData() {
    try {
        for await (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            } 
        }catch (error) {
            console.log(error)
    }
}
