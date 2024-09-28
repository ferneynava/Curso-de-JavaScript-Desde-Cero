// for in: Sirve para iterar sobre las propiedades de un objeto y nos devuelve el nombre de las propiedades.
propiedades = valor 
Array, String
item 

//Por cada elemento en el objeto, se ejecuta el código dentro del bloque.

for (variable in objeto) {
    // Código a ejecutar
}

// Ejemplo

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    uva: 2,
    naranja: 6
}

for (let fruta in listaDeCompras) {
    console.log(fruta); // manzana, pera, uva, naranja
}

for (let fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);		
}

const array = ["manzana", "pera", "uva", "naranja"];	

for (let fruta in array) {
    console.log(fruta); // 0, 1, 2, 3
}

