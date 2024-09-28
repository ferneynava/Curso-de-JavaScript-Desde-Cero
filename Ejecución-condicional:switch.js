switch(expresion) {
    case valor1:
        // Código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión es igual a valor2
        break;
    case valor3:
        // Código a ejecutar si la expresión es igual a valor3
        break;
    default:
        // Código a ejecutar si la expresión no es igual a ninguno de los valores
        break;
}

// Ejemplo
let expr = "Papayas";

switch(expr) {
    case "Narajas":
        console.log("Las naranjas cuestan $0.59 el kilo.");
        break;
    case "Mamzanas":
        console.log("Las manzanas cuestan $0.32 el kilo.");
        break;
    case "Platanos":
        console.log("Los platanos cuestan $0.48 el kilo.");
        break;
    case "Mangos": 
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $2.79 el kilo.");
        break;
    default:
        console.log(`Lo siento, no tenemos las ${expr}.`);

}

console.log("¿Hay algo más que te gustaría comprar?");

// Ejercicios 
// 1. Escribe un programa que le pida al usuario ingresar un número. Si el número es múltiplo de 3 debe imprimir en la consola "bing". Si el número es múltiplo de 5 debe imprimir en la consola "bong". Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong". Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

let numero = parseInt(prompt("Ingrese un número"));
if(numero % 3 == 0 && numero % 5 == 0){
    console.log("bingbong")
} else if (numero % 3 == 0){
    console.log("bing")
} else if (numero % 5 == 0){
    console.log("bong")
} else {
    console.log("numero")
}




