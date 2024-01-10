// Paso por valor
let x = 1;
let y = "Hola";
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

a = 12;
b = "Platzi";
c = undefined;

// Paso por Referencia

let frutas = ["manzana"];
frutas.push("pera");

console.log(frutas);

let panes = ["🥐"];
let copiaDePanes = panes;

panes.push("🥖");
console.log(panes, copiaDePanes);

// Tipo de dato complejo - Paso por referencia en objetos

let frutasPreferidas = {
    naranja: "🍊"
}

let vegetales = frutasPreferidas;

vegetales.naranja = "🥕";
console.log(frutasPreferidas);

let ropa = {
    pantalon: "👖"
}

ropa.vestido = "👗";
console.log(ropa);